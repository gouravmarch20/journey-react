import { useState, useEffect } from "react"

export const useFetchHook = (url) => {
  const [products, setProduct] = useState()
  const [loading, setLoading] = useState(true)
  const [err, setError] = useState()

  useEffect(() => {
    setLoading(true)
    fetchApi(url)
  }, [url])
  const fetchApi = (url) => {
    fetch(url)
      .then((res) => res.json())
      .then((res) => {
        setProduct(res)
        setLoading(false)
        setError(false)
      })
      .catch((err) => {
        setError(true)
        setLoading(false)
        setProduct([])
      })
  }

  return { products, loading, err }
}
