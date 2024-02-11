import React, { useEffect, useState } from "react"

const H1Search = (WrappedComponenet, entity) => {
  const SearchComp = () => {
    const [data, setData] = useState([])
    const [term, setTerm] = useState("")
    let filteredData = data.slice(0, 10).filter((d) => {
      if (entity === "users") {
        const { name } = d
        // find logic
        return name.indexOf(term) >= 0
      }
      if (entity === "todos") {
        const { title } = d
        return title.indexOf(term) >= 0
      }
    })

    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(
          `https://jsonplaceholder.typicode.com/${entity}`
        )
        const json = await res.json()
        setData(json)
      }
      fetchData()
    }, [])
    return (
      <div>
        <h2>{entity}</h2>
        <input
          type="text"
          value={term}
          onChange={(e) => setTerm(e.target.value)}
        />
        <WrappedComponenet data={filteredData}></WrappedComponenet>
      </div>
    )
  }
  return SearchComp
}

export default H1Search
