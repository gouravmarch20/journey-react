import { useState } from "react";
import "./styles.css";

export default function App() {
  const brandData = ["puma", "adiddas", "wildcraft", "levis", "celio"];
  const [brands, setBrand] = useState(brandData);
  const searchBrands = (value) => {
    const data = brandData.filter((brand) => brand.includes(value));
    setBrand(data);
  };
  return (
    <div className="App">
      <input onChange={(e) => searchBrands(e.target.value)} />
      <ul>
        {brands.map((brand) => (
          <li>{brand}</li>
        ))}
      </ul>
    </div>
  );
}

// Do the same thing with this Data Structure

// Do the same thing with this Data Structure
const brandData2 = {
  customerRating: [
    { brandId: "0a", rating: "4.5" },
    { brandId: "0b", rating: "4" },
    { brandId: "0c", rating: "3.8" },
    { brandId: "0d", rating: "4.5" },
    { brandId: "0e", rating: "3.9" }
  ],
};
