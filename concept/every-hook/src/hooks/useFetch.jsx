import React, { useState, useEffect } from "react";

export const useFetchHook = (url) => {
  const [products, setProduct] = useState();
  const [loading, setLoading] = useState(true);
  const [err, setError] = useState();

  useEffect(() => {
    setLoading(true);
    fetchApi(url);
    console.log("14");
  }, [url]);
  const fetchApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res);
        setLoading(false);
        setError(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
        setProduct([]);
      });
  };
  console.log("15");

  return { products, loading, err };
};
