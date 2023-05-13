import React from "react";
import { useFetchHook } from "../../coustom-hooks/useFetch";
// import { useFetchHook } from './coustom-hooks'

export const ApiFetch = () => {
  const { products, loading, err } = useFetchHook(
    "https://jsonplaceholder.typicode.com/users"
  );
  return (
    <div>
      {err && <h1> an api errror </h1>}
      {loading ? (
        <h1> loading </h1>
      ) : (
        products?.length &&
        products.map((product) => (
          <p>
            {product.name} , {product.email}
          </p>
        ))
      )}
    </div>
  );
};
