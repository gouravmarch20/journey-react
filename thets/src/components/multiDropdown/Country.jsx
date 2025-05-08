import React, { useState } from "react";
const countries = [
  { label: "Brazil", value: "bz" },
  { label: "India", value: "in" },
  { label: "America", value: "us" },
];

const states = {
  in: [
    { label: "Maharashtra", value: "mh" },
    { label: "Andhra Pradesh", value: "ap" },
    { label: "Karnataka", value: "kn" },
  ],
  us: [
    { label: "Washington", value: "ws" },
    { label: "Los Angeles", value: "la" },
    { label: "Texas", value: "tx" },
  ],
  bz: [
    { label: "São Paulo", value: "sp" },
    { label: "Rio de Janeiro", value: "rj" },
  ],
};

const CountryDropdown = () => {
  const [selectedValue, setSelectedValue] = useState({
    country: countries[2], // Default: America

    state: {},
  });
  console.log("selectedValue", selectedValue.country);
  const handleChange = (type, e, options) => {
    const selected = options.find((item) => item.value === e.target.value);
    setSelectedValue((prev) => ({ ...prev, [type]: selected }));
  };

  //   console.log("selectedValue", selectedValue);
  const currentCountryCode = selectedValue.country?.value;

  const stateOptions = states[currentCountryCode] || [];

  return (
    <div>
      CountryDropdown
      <select
        //   ! m2 :: mapping
        // value={selectedValue?.country}
        value={selectedValue?.country?.value}
        onChange={(e) => handleChange("country", e, countries)}
      >
        {countries?.map((country) => (
          // !m1::  select value --> renter option value
          //   <option key={c?.value}>{c?.value}</option>
          <option value={country.value} key={country.value}>
            {country.label}
          </option>
        ))}
      </select>
      {/*  */}
      {stateOptions.length > 0 && (
        <select
          value={selectedValue?.state?.value}
          onChange={(e) => handleChange("state", e, stateOptions)}
        >
          {stateOptions?.map((state) => (
            <option value={state.value} key={state.value}>
              {state.label}
            </option>
          ))}
        </select>
      )}
    </div>
  );
};

export default CountryDropdown;
