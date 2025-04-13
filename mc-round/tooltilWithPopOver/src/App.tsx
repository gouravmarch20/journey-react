import { useState, useRef, useEffect } from "react";

// Define types
interface Employee {
  emp: string;
  empId: string;
  category: string;
  option: string[];
}

// Sample data
const data: Employee[] = [
  { emp: "gourav", empId: "1", category: "alpha", option: ["delete", "edit"] },
  { emp: "naruto", empId: "2", category: "alpha", option: ["delete"] },
  { emp: "gitman", empId: "3", category: "alpha", option: ["view"] },
];

const App = () => {
  const [visibleOption, setVisibleOption] = useState<string | null>(null);
  const [hoveredEmp, setHoveredEmp] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLUListElement | null>(null);

  const handleClick = (empId: string) => {
    setVisibleOption((prev) => (prev === empId ? null : empId));
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setVisibleOption(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      style={{
        width: "20%",
        background: "yellow",
        padding: "10px",
      }}
      onMouseLeave={() => {
        setHoveredEmp(null);
      }}
    >
      {data.map((d) => (
        <div
          key={d.empId}
          style={{
            display: "flex",
            alignItems: "center",
            marginBottom: "10px",
            position: "relative",
          }}
          onMouseEnter={() => setHoveredEmp(d.empId)}
          onMouseLeave={() => {
            if (visibleOption !== d.empId) {
              setHoveredEmp(null);
            }
          }}
        >
          <h4 style={{ margin: 0 }}>{d.emp}</h4>

          {(hoveredEmp === d.empId || visibleOption === d.empId) && (
            <button
              style={{ marginLeft: "10px" }}
              onClick={() => handleClick(d.empId)}
            >
              Edit
            </button>
          )}

          {visibleOption === d.empId && (
            <ul
              ref={dropdownRef}
              style={{
                listStyleType: "none",
                margin: 0,
                padding: "5px",
                position: "absolute",
                left: 0,
                top: "100%",
                backgroundColor: "#f9f9f9",
                border: "1px solid #ccc",
                boxShadow: "0px 8px 16px rgba(0,0,0,0.2)",
                zIndex: 1,
              }}
            >
              {d.option.map((opt, index) => (
                <li
                  key={index}
                  style={{
                    padding: "5px 10px",
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    console.log(`${opt} clicked for ${d.emp}`);
                    setVisibleOption(null);
                  }}
                >
                  {opt.charAt(0).toUpperCase() + opt.slice(1)}
                </li>
              ))}
            </ul>
          )}
        </div>
      ))}
    </div>
  );
};

export default App;
