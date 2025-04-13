import React, { useState } from "react";

// Accordion Section Component
const AccordionSection = ({ title, content, index, handleCheckboxChange, checked }) => {
  return (
    <div
      style={{
        marginBottom: "10px",
        padding: "10px",
        border: "1px solid #ccc",
        borderRadius: "5px",
      }}
    >
      <h3>{title}</h3>
      <p>{content}</p>
      <div>
        <input
          type="checkbox"
          id={`section-${index}`}
          checked={checked}
          onChange={() => handleCheckboxChange(index)}
        />
        <label htmlFor={`section-${index}`}> I agree to these terms</label>
      </div>
    </div>
  );
};

// Main Terms & Conditions Accordion Component
const TermsAndConditionsAccordion = () => {
  const [checkboxState, setCheckboxState] = useState([false, false, false]); // Assume 3 sections
  const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
  const [formSubmitted, setFormSubmitted] = useState(false);

  // Accordion Sections Data (Title and Content)
  const sections = [
    {
      title: "Section 1: User Agreement",
      content: "Terms related to user account creation and use.",
    },
    {
      title: "Section 2: Privacy Policy",
      content: "Terms related to the use of user data.",
    },
    {
      title: "Section 3: Payment Terms",
      content: "Terms related to payments, fees, and refunds.",
    },
  ];

  // Handle checkbox state changes
  const handleCheckboxChange = (index) => {
    const newState = [...checkboxState];
    newState[index] = !newState[index];
    setCheckboxState(newState);
    checkAllChecked(newState);
  };

  // Check if all checkboxes are checked
  const checkAllChecked = (newState) => {
    setIsSubmitDisabled(!newState.every((checked) => checked));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Terms & Conditions</h2>
      <div style={{ marginBottom: "20px" }}>
        {sections.map((section, index) => (
          <AccordionSection
            key={index}
            index={index}
            title={section.title}
            content={section.content}
            checked={checkboxState[index]}
            handleCheckboxChange={handleCheckboxChange}
          />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <button
          type="submit"
          disabled={isSubmitDisabled}
          style={{
            padding: "10px 20px",
            cursor: isSubmitDisabled ? "not-allowed" : "pointer",
            backgroundColor: isSubmitDisabled ? "#ccc" : "#007BFF",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
          }}
        >
          Submit
        </button>
      </form>
      {formSubmitted && (
        <p style={{ marginTop: "20px", color: "green" }}>Form Submitted Successfully!</p>
      )}
    </div>
  );
};

// Wrap the TermsAndConditionsAccordion in your App component
export default function App() {
  return <TermsAndConditionsAccordion />;
}