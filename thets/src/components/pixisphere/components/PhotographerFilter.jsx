"use client";
import React, { useEffect, useState, useMemo } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const PhotographerFilter = ({ onFilterChange, photographers }) => {
  const router = useRouter();

  const cities = useMemo(() => {
    const citySet = new Set(photographers.map((p) => p.location));
    return Array.from(citySet);
  }, [photographers]);

  const stylesList = useMemo(() => {
    const stylesSet = new Set(photographers.flatMap((p) => p.styles || []));
    return Array.from(stylesSet);
  }, [photographers]);

  const [MIN_PRICE, MAX_PRICE] = useMemo(() => {
    if (!photographers || photographers.length === 0) return [0, 20000];
    const prices = photographers.map((p) => p.price);
    return [Math.min(...prices), Math.max(...prices)];
  }, [photographers]);

  const searchParams = useSearchParams();
  const queryLocation = searchParams.get("location");

  const [selectedCity, setSelectedCity] = useState(queryLocation || "");

  const [selectedRating, setSelectedRating] = useState(null);
  const [selectedStyle, setSelectedStyle] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 20000]);
  const [sortOption, setSortOption] = useState("");
  const [searchKeyword, setSearchKeyword] = useState("");

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
      searchKeyword
    });
  }, [selectedCity, selectedRating, selectedStyle, priceRange, sortOption , searchKeyword]);

  return (
    <aside className="w-full  p-6 bg-white rounded-lg shadow-sm border border-gray-200 sticky top-4">
      <h3 className="text-xl font-bold mb-6 text-gray-800">Filters</h3>

      {/* City Dropdown */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-700">City</label>
        <select
          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
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

      <div className="mb-4">
        <input
          type="text"
          placeholder="Search photographers..."
          className="w-full  p-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={searchKeyword}
          onChange={(e) => setSearchKeyword(e.target.value)}
        />
      </div>
      {/* Rating Filter */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-700">
          Minimum Rating
        </label>
        <div className="space-y-2">
          {[4, 3, 2].map((rating) => (
            <label
              key={rating}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="radio"
                name="rating"
                value={rating}
                checked={selectedRating === rating}
                onChange={() => setSelectedRating(rating)}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300"
              />
              <span className="text-gray-700">{rating}+ Stars</span>
            </label>
          ))}
        </div>
      </div>

      {/* Styles Checkboxes */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-700">Styles</label>
        <div className="space-y-2">
          {stylesList.map((style) => (
            <label
              key={style}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <input
                type="checkbox"
                checked={selectedStyle.includes(style)}
                onChange={(e) => {
                  const checked = e.target.checked;
                  setSelectedStyle((prev) =>
                    checked ? [...prev, style] : prev.filter((s) => s !== style)
                  );
                }}
                className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
              />
              <span className="text-gray-700">{style}</span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Range */}
      <div className="mb-6">
        <label className="block font-medium mb-2 text-gray-700">
          Price Range
        </label>
        <div className="mb-4">
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>₹{priceRange[0].toLocaleString()}</span>
            <span>₹{priceRange[1].toLocaleString()}</span>
          </div>
          <div className="space-y-4">
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={100}
              value={priceRange[0]}
              onChange={handleMinChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
            <input
              type="range"
              min={MIN_PRICE}
              max={MAX_PRICE}
              step={100}
              value={priceRange[1]}
              onChange={handleMaxChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-blue-600"
            />
          </div>
        </div>
      </div>

      {/* Sorting */}
      <div className="mb-2">
        <label className="block font-medium mb-2 text-gray-700">Sort By</label>
        <select
          className="w-full p-2.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700"
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
