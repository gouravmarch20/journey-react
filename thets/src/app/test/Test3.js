import React, { useState } from "react";

const MultiTabForm = () => {
  const [currentTab, setCurrentTab] = useState(0);
  const [formData, setFormData] = useState({
    age: "",
    email: "",
    interest: "",
    subscribe: false,
    notification: "none",
  });
  const [errors, setErrors] = useState({});
  const [submissionMessage, setSubmissionMessage] = useState("");

  const tabs = ["Profile", "Interest", "Settings"];

  const validate = () => {
    let newErrors = {};
    if (!formData.age || isNaN(formData.age)) {
      newErrors.age = "Age is required and must be numeric";
    }
    if (!formData.email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(formData.email)) {
      newErrors.email = "Enter a valid email";
    }
    if (currentTab === 2 && !formData.notification) {
      newErrors.notification = "Select a notification preference";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validate()) {
      setCurrentTab((prev) => prev + 1);
    }
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setSubmissionMessage("Form submitted successfully!");
    }
  };

  return (
    <div style={{ width: "400px", margin: "auto", padding: "20px", border: "1px solid #ccc", borderRadius: "10px" }}>
      <h2>Multi-Tab Form</h2>
      <div style={{ display: "flex", justifyContent: "space-around", marginBottom: "20px" }}>
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => setCurrentTab(index)}
            style={{
              padding: "8px 16px",
              cursor: "pointer",
              background: currentTab === index ? "#007bff" : "#ddd",
              color: currentTab === index ? "white" : "black",
              border: "none",
              borderRadius: "5px",
            }}
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit}>
        {currentTab === 0 && (
          <>
            <label htmlFor="age">Age:</label>
            <input id="age" type="text" name="age" value={formData.age} onChange={handleChange} />
            {errors.age && <p style={{ color: "red" }}>{errors.age}</p>}

            <br />

            <label htmlFor="email">Email:</label>
            <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} />
            {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
          </>
        )}

        {currentTab === 1 && (
          <>
            <label>Select Interest:</label>
            <select name="interest" value={formData.interest} onChange={handleChange}>
              <option value="">Select...</option>
              <option value="Sports">Sports</option>
              <option value="Music">Music</option>
              <option value="Technology">Technology</option>
            </select>

            <label>
              <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} /> Subscribe to Newsletter
            </label>
          </>
        )}

        {currentTab === 2 && (
          <>
            <label>Notification Preferences:</label>
            <label>
              <input type="radio" name="notification" value="email" checked={formData.notification === "email"} onChange={handleChange} /> Email
            </label>
            <label>
              <input type="radio" name="notification" value="sms" checked={formData.notification === "sms"} onChange={handleChange} /> SMS
            </label>
            <label>
              <input type="radio" name="notification" value="none" checked={formData.notification === "none"} onChange={handleChange} /> None
            </label>
            {errors.notification && <p style={{ color: "red" }}>{errors.notification}</p>}

            <button
              type="submit"
              style={{ padding: "10px", marginTop: "10px", background: "green", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}
            >
              Submit
            </button>
          </>
        )}
      </form>

      {currentTab < 2 && (
        <button
          onClick={handleNext}
          style={{ marginTop: "10px", padding: "10px", background: "blue", color: "white", border: "none", cursor: "pointer", borderRadius: "5px" }}
        >
          Next
        </button>
      )}

      {submissionMessage && <p style={{ color: "green" }}>{submissionMessage}</p>}
    </div>
  );
};

export default MultiTabForm;
