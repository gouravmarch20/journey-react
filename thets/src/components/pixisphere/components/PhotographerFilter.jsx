// components/PhotographerFilter.jsx
"use client";
import React, { useEffect, useState } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const cities = ["Mumbai", "Delhi", "Hyderabad", "Bengaluru"];
const stylesList = ["Studio", "Candid", "Traditional", "Outdoor"];

const PhotographerFilter = ({ onFilterChange }) => {
  const MIN_PRICE = 0;
  const MAX_PRICE = 20000;
  const router = useRouter();

  const searchParams = useSearchParams();
  const queryLocation = searchParams.get("location");

  const [selectedCity, setSelectedCity] = useState(queryLocation || "");

  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortOption, setSortOption] = useState("");
  
  // Keep min and max sliders from crossing each other
  const handleMinChange = (e) => {
    const value = Math.min(Number(e.target.value), priceRange[1] - 100);
    setPriceRange([value, priceRange[1]]);
  };

  const handleMaxChange = (e) => {
    const value = Math.max(Number(e.target.value), priceRange[0] + 100);
    setPriceRange([priceRange[0], value]);
  };
  useEffect(() => {
    onFilterChange({
      selectedCity,
      selectedRating,
      selectedStyle,
      priceRange,
      sortOption,
    });
  }, [selectedCity, selectedRating, selectedStyle, priceRange, sortOption]);

  return (
    <aside className="w-full md:w-64 p-4 bg-gray-100 rounded mb-6 md:mb-0">
      <h3 className="text-lg font-bold mb-4">Filters</h3>

      {/* City Dropdown */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">City</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setSelectedCity(e.target.value)}
          value={selectedCity}
        >
          <option value="">All Cities</option>
          {cities.map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Minimum Rating</label>
        {[4, 3, 2].map((rating) => (
          <label key={rating} className="block">
            <input
              type="radio"
              name="rating"
              value={rating}
              checked={selectedRating === rating}
              onChange={() => setSelectedRating(rating)}
              className="mr-2"
            />
            {rating}+
          </label>
        ))}
      </div>

      {/* Styles Checkboxes */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Styles</label>
        {stylesList.map((style) => (
          <label key={style} className="block">
            <input
              type="checkbox"
              checked={selectedStyle.includes(style)}
              onChange={(e) => {
                const checked = e.target.checked;
                setSelectedStyle((prev) =>
                  checked ? [...prev, style] : prev.filter((s) => s !== style)
                );
              }}
              className="mr-2"
            />
            {style}
          </label>
        ))}
      </div>
      {/* price range min , max */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Price Range</label>

        <div className="mb-2">
          <div className="flex justify-between text-sm mb-1">
            <span>₹{priceRange[0]}</span>
            <span>₹{priceRange[1]}</span>
          </div>
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={100}
            value={priceRange[0]}
            onChange={handleMinChange}
            className="w-full"
          />
          <input
            type="range"
            min={MIN_PRICE}
            max={MAX_PRICE}
            step={100}
            value={priceRange[1]}
            onChange={handleMaxChange}
            className="w-full mt-2"
          />
        </div>
      </div>

      {/* Sorting */}
      <div className="mb-4">
        <label className="block font-semibold mb-1">Sort By</label>
        <select
          className="w-full p-2 border rounded"
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="">None</option>
          <option value="priceLowHigh">Price: Low to High</option>
          <option value="ratingHighLow">Rating: High to Low</option>
          <option value="recent">Recently Added</option>
        </select>
      </div>
    </aside>
  );
};

export default PhotographerFilter;
