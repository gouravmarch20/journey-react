// app/pixisphere/page.jsx
"use client";
import React, { useEffect, useState } from "react";

import PhotographerFilter from "./components/PhotographerFilter";
import PhotographerCard from "./components/PhotographerCard";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import Breadcrumbs from "./components/Breadcrumbs";

const Pixisphere = () => {
  const router = useRouter();

  const searchParams = useSearchParams();
  const queryLocation = searchParams.get("location");

  const [allPhotographers, setAllPhotographers] = useState([]);
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      console.log("queryLocation", queryLocation);
      const res = await fetch("/api/photographers");

      const data = await res.json();

      setAllPhotographers(data);
      let filterData = data;
      if (queryLocation) {
        filterData = data?.filter((d) => d.location == queryLocation);
      }
      setFiltered(filterData);

      const params = new URLSearchParams(searchParams.toString());
      params.delete("location");
      router.replace(`${window.location.pathname}?${params.toString()}`, {
        scroll: false,
      });
    };

    fetchData();
  }, []);

  const handleFilterChange = ({
    selectedCity,
    selectedRating,
    selectedStyle,
    priceRange,
    sortOption,
  }) => {
    console.log(
      "onFilterChange",
      selectedCity,
      selectedRating,
      selectedStyle,
      priceRange,
      sortOption
    );
    let updated = [...allPhotographers];

    if (selectedCity) {
      updated = updated.filter((p) => p.location === selectedCity);
    }

    if (selectedRating) {
      updated = updated.filter((p) => p.rating >= selectedRating);
    }

    if (selectedStyle.length > 0) {
      updated = updated.filter((p) =>
        selectedStyle.some((s) => p.styles.includes(s))
      );
    }

    updated = updated.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    if (sortOption === "priceLowHigh") {
      updated.sort((a, b) => a.price - b.price);
    } else if (sortOption === "priceHighLow") {
      updated.sort((a, b) => b.price - a.price);
    } else if (sortOption === "ratingHighLow") {
      updated.sort((a, b) => b.rating - a.rating);
    } else if (sortOption === "recent") {
      updated.sort((a, b) => b.id - a.id); // assuming higher ID = recent
    }

    setFiltered(updated);
  };
  const handleViewProfile = (profile) => {
    console.log("profile", profile);
    router.push(`/pixisphere/profile/${profile.id}`);
  };
  return (
    <div>
      <Breadcrumbs />

      <div className="md:flex p-4 gap-6">
        <div className="md:w-1/4">
          <PhotographerFilter onFilterChange={handleFilterChange} />
        </div>
        <div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.length > 0 ? (
            filtered.map((p) => (
              <PhotographerCard
                key={p.id}
                photographer={p}
                handleViewProfile={handleViewProfile}
              />
            ))
          ) : (
            <p className="text-center col-span-full text-gray-500">
              No results found.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pixisphere;
