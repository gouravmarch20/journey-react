"use client";
import React, { useState } from "react";

const PasswordGenerator = () => {
  const [length, setLength] = useState(8);
  const [includeUppercase, setIncludeUppercase] = useState(true);
  const [includeLowercase, setIncludeLowercase] = useState(true);
  const [includeNumbers, setIncludeNumbers] = useState(true);
  const [includeSymbols, setIncludeSymbols] = useState(false);
  const [password, setPassword] = useState("");

  const generatePassword = () => {
    const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+=-{}[]|:;<>,.?/~";

    let availableChars = "";
    if (includeUppercase) availableChars += upperCaseChars;
    if (includeLowercase) availableChars += lowerCaseChars;
    if (includeNumbers) availableChars += numberChars;
    if (includeSymbols) availableChars += symbolChars;

    if (availableChars.length === 0) {
      alert("Please select at least one character type.");
      return;
    }

    let generatedPassword = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * availableChars.length);
      generatedPassword += availableChars[randomIndex];
    }

    setPassword(generatedPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard
      .writeText(password)
      .then(() => {
        alert("Password copied to clipboard!");
      })
      .catch((err) => {
        console.error("Failed to copy password: ", err);
      });
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6">Password Generator</h1>

      <div className="flex flex-col gap-4 bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <input
          type="number"
          min="4"
          max="30"
          value={length}
          onChange={(e) => setLength(e.target.value)}
          className="border p-2 rounded"
          placeholder="Password Length"
        />

        <div className="flex flex-col gap-2">
          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeUppercase}
              onChange={() => setIncludeUppercase(!includeUppercase)}
            />
            Include Uppercase Letters
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeLowercase}
              onChange={() => setIncludeLowercase(!includeLowercase)}
            />
            Include Lowercase Letters
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={() => setIncludeNumbers(!includeNumbers)}
            />
            Include Numbers
          </label>

          <label className="flex items-center gap-2">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={() => setIncludeSymbols(!includeSymbols)}
            />
            Include Symbols
          </label>
        </div>

        <button
          onClick={generatePassword}
          className="bg-blue-600 hover:bg-blue-700 text-white py-2 rounded"
        >
          Generate Password
        </button>

        {password && (
          <>
            <div className="bg-gray-200 p-3 rounded text-center break-all">
              {password}
            </div>
            <button
              onClick={copyToClipboard}
              className="bg-green-500 hover:bg-green-600 text-white py-2 rounded"
            >
              Copy to Clipboard
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default PasswordGenerator;
