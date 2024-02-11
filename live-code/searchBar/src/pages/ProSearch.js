import { useState } from "react";


import { SearchBar } from "../components/SearchBar";
import { SearchResultsList } from "../components/SearchResultsList";

function Search() {
  const [results, setResults] = useState([]);

  return (

      <div className="search-bar-container">
        <SearchBar setResults={setResults} />
        {results && results.length > 0 && <SearchResultsList results={results} />}
      </div>

  );
}

export default Search;
