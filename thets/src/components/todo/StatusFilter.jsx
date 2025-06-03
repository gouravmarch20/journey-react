export default function StatusFilter({ currentFilter, onFilterChange }) {
  const filters = ["all", "pending", "completed"];

  return (
    <div className="status-filter">
      {filters.map((filter) => (
        <button
          key={filter}
          className={`button filter-button ${currentFilter === filter ? "active" : ""}`}
          onClick={() => onFilterChange(filter)}
        >
          {filter.charAt(0).toUpperCase() + filter.slice(1)}
        </button>
      ))}
    </div>
  );
}
