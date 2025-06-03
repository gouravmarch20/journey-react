"use client";
import React, { useEffect, useState, useMemo } from "react";
import PhotographerFilter from "./components/PhotographerFilter";
import PhotographerCard from "./components/PhotographerCard";
import { useRouter, useSearchParams } from "next/navigation";
import Breadcrumbs from "./components/Breadcrumbs";

const Pixisphere = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const queryLocation = searchParams.get("location");

  const [photographers, setPhotographers] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhotographers = async () => {
      try {
        const res = await fetch("/api/photographers");
        const data = await res.json();
        setPhotographers(data);

        const filtered = queryLocation
          ? data.filter((p) => p.location === queryLocation)
          : data;

        setFiltered(filtered);

        const params = new URLSearchParams(searchParams.toString());
        params.delete("location");
        router.replace(`${window.location.pathname}?${params}`, {
          scroll: false,
        });
      } catch (err) {
        console.error("Failed to fetch photographers:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchPhotographers();
  }, []);

  const handleFilterChange = (filters) => {
    let updated = [...photographers];

    const {
      selectedCity,
      selectedRating,
      selectedStyle,
      priceRange,
      sortOption,
      searchKeyword,
    } = filters;

    if (selectedCity)
      updated = updated.filter((p) => p.location === selectedCity);
    if (selectedRating)
      updated = updated.filter((p) => p.rating >= selectedRating);
    if (selectedStyle.length) {
      updated = updated.filter((p) =>
        selectedStyle.some((style) => p.styles.includes(style))
      );
    }
    if (searchKeyword) {
      updated = updated.filter((p) =>
        p.name.toLowerCase().includes(searchKeyword.toLowerCase())
      );
    }

    updated = updated.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    switch (sortOption) {
      case "priceLowHigh":
        updated.sort((a, b) => a.price - b.price);
        break;
      case "priceHighLow":
        updated.sort((a, b) => b.price - a.price);
        break;
      case "ratingHighLow":
        updated.sort((a, b) => b.rating - a.rating);
        break;
      case "recent":
        updated.sort((a, b) => b.id - a.id);
        break;
    }

    setFiltered(updated);
  };

  const handleViewProfile = (profile) => {
    router.push(`/pixisphere/profile/${profile.id}`);
  };

  return (
    <div className="min-h-screen p-6  ">
      <Breadcrumbs />
      <div className="flex flex-col lg:flex-row gap-6">
        {" "}
        <div className="w-full lg:w-1/4 mb-6 lg:mb-0">
          {" "}
          <PhotographerFilter
            onFilterChange={handleFilterChange}
            photographers={photographers}
          />
        </div>
        <div className="w-full lg:w-3/4">
          {" "}
          {loading ? (
            <div className="text-center text-gray-500 py-12">
              Loading photographers...
            </div>
          ) : filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filtered.map((photographer) => (
                <PhotographerCard
                  key={photographer.id}
                  photographer={photographer}
                  handleViewProfile={handleViewProfile}
                />
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-500 py-12">
              No photographers match your criteria.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Pixisphere;
