"use client";
import { useState, useEffect, useMemo } from "react";

const users = [
  "Alice",
  "Bob",
  "Charlie",
  "David",
  "Eve",
  "Frank",
  "Grace",
  "Hank",
  "Ivy",
  "Jack",
];

function debounce(fn, delay) {
  console.log("the_closure_and return funcation ==> i run once");
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

export default function SearchComponent() {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  //& This is an important logic

  //! useeffect inside function any state change.... whole code render ... useEffect function re-run form beginning ...
  //   useEffect(() => {
  //     const debouncedSearch = debounce((searchQuery) => {
  //       setFilteredUsers(
  //         users.filter((user) =>
  //           user.toLowerCase().includes(searchQuery.toLowerCase())
  //         )
  //       );
  //     }, 800);

  //     debouncedSearch(query);
  //   }, [query]);
  // Memoize the debounced function so it's created only once
  //
  const debouncedSearch = useMemo(
    () =>
      debounce((searchQuery) => {
        setFilteredUsers(
          users.filter((user) =>
            user.toLowerCase().includes(searchQuery.toLowerCase())
          )
        );
      }, 800),
    []
  );
  useEffect(() => {
    debouncedSearch(query);
  }, [query, debouncedSearch]); // Include debouncedSearch in dependencies
  const a = 5;
  return (
    <div>
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <ul>
        {filteredUsers.map((user) => (
          <li key={user}>{user}</li>
        ))}
      </ul>
    </div>
  );
}
