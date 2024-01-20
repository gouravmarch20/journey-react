import React from "react"
import JobPosting from "./JobPosting";
import { useState } from "react";
import { useEffect } from "react";

const ITEMS_PER_PAGE = 6
const API_ENDPOINT = "https://hacker-news.firebaseio.com/v0"
const JobM = () => {
  const [items, setItems] = useState([])
  const [itemIds, setItemIds] = useState(null)
  const [fetchingDetailsLoader, setFetchingDetailsLoader] = useState(false)
  const [currentPage, setCurrentPage] = useState(0)

  async function fetchItems(currPage) {
    setCurrentPage(currPage)
    setFetchingDetailsLoader(true)
    //
    let itemsList = itemIds //? state run async , variable mai store
    if (itemsList === null) {
      const response = await fetch(`${API_ENDPOINT}/jobstories.json`)
      itemsList = await response.json()
      setItemIds(itemsList)
    }
    //? no idea
    const itemIdsForPage = itemsList.slice(
      currPage * ITEMS_PER_PAGE,
      currPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE
    )

    const itemsForPage = await Promise.all(
      itemIdsForPage.map((itemId) =>
        fetch(`${API_ENDPOINT}/item/${itemId}.json`).then((response) =>
          response.json()
        )
      )
    )
    setItems([...items, ...itemsForPage])
    setFetchingDetailsLoader(false)
  }
  useEffect(() => {
    if (currentPage === 0) fetchItems(currentPage)
  }, [currentPage])
  return (
    <div className="custom-app">
      <h1 className="custom-title">Hacker News Jobs Board</h1>
      {itemIds === null || items.length < 1 ? (
        <p className="custom-loading">Loading...</p>
      ) : (
        <div>
          <div className="custom-items" role="list">
            {items.map((item) => (
              <JobPosting key={item.id} {...item} />
            ))}
          </div>
          {items.length > 0 &&
            currentPage * ITEMS_PER_PAGE + ITEMS_PER_PAGE < itemIds.length && (
              <button
                className={`custom-load-more-button`}
                disabled={fetchingDetailsLoader}
                onClick={() => fetchItems(currentPage + 1)}
              >
                {fetchingDetailsLoader ? "loading..." : "Load more jobs"}
              </button>
            )}
        </div>
      )}
    </div>
  )
}

export default JobM
