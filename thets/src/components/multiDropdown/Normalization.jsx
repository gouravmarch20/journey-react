import React, { useState } from "react";
import { normalizedData } from "./normalizedData";

const ContinentDropdown = () => {
  const [selected, setSelected] = useState({
    continent: "",
    country: "",
    state: "",
    city: "",
  });

  const { continent, country, state, city } = selected;

  const handleChange = (level, value) => {
    setSelected((prev) => {
      const resetLevels = {
        country: { state: "", city: "" },
        state: { city: "" },
        continent: { country: "", state: "", city: "" },
        city: {},
      };
      return { ...prev, [level]: value, ...resetLevels[level] };
    });
  };

  const continents = normalizedData.continentOrder.map(
    (id) => normalizedData.continentsById[id]
  );

  const countryOptions = continent
    ? normalizedData.continentsById[continent].countries.map(
        (id) => normalizedData.countriesById[id]
      )
    : [];

  const stateOptions = country
    ? normalizedData.countriesById[country].states.map(
        (id) => normalizedData.statesById[id]
      )
    : [];

  const cityOptions = state
    ? normalizedData.statesById[state].cities.map(
        (id) => normalizedData.citiesById[id]
      )
    : [];

  return (
    <div>
      <h3>Continent → Country → State → City</h3>

      {/* Continent */}
      <select
        value={continent}
        onChange={(e) => handleChange("continent", e.target.value)}
      >
        <option value="">Select Continent</option>
        {continents.map((c) => (
          <option key={c.value} value={c.value}>
            {c.label}
          </option>
        ))}
      </select>

      {/* Country */}
      {countryOptions.length > 0 && (
        <select
          value={country}
          onChange={(e) => handleChange("country", e.target.value)}
        >
          <option value="">Select Country</option>
          {countryOptions.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      )}

      {/* State */}
      {stateOptions.length > 0 && (
        <select
          value={state}
          onChange={(e) => handleChange("state", e.target.value)}
        >
          <option value="">Select State</option>
          {stateOptions.map((s) => (
            <option key={s.value} value={s.value}>
              {s.label}
            </option>
          ))}
        </select>
      )}

      {/* City */}
      {cityOptions.length > 0 && (
        <select
          value={city}
          onChange={(e) => handleChange("city", e.target.value)}
        >
          <option value="">Select City</option>
          {cityOptions.map((c) => (
            <option key={c.value} value={c.value}>
              {c.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default ContinentDropdown;
