"use client";
import React, { useState } from "react";

// Step Components
const StepOne = () => <p className="text-lg">This is Step 1 Content</p>;
const StepTwo = () => <p className="text-lg">This is Step 2 Content</p>;
const StepThree = () => <p className="text-lg">This is Step 3 Content</p>;
const StepFour = () => <p className="text-lg">This is Step 4 Content</p>;

const Stepper = () => {
  const steps = ["Step 1", "Step 2", "Step 3", "Step 4"];
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const progressPercentage = (currentStep / (steps.length - 1)) * 100;

  // Function to render the correct step component
  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <StepOne />;
      case 1:
        return <StepTwo />;
      case 2:
        return <StepThree />;
      case 3:
        return <StepFour />;
      default:
        return <div>Unknown Step</div>;
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-8">React Stepper</h1>

      {/* Progress Bar */}
      <div className="w-full max-w-lg mb-8 bg-red-700">
        <div className="w-full bg-gray-300 rounded-full h-3">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          ></div>
        </div>
      </div>

      {/* Steps */}
      <div className="flex justify-between w-full max-w-lg mb-8">
        {steps.map((step, index) => (
          <div
            key={index}
            className={`flex flex-col items-center ${
              index <= currentStep ? "text-blue-600" : "text-gray-400"
            }`}
          >
            <div
              className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2 ${
                index <= currentStep ? "border-blue-600" : "border-gray-400"
              }`}
            >
              {index + 1}
            </div>
            <span className="text-xs">{step}</span>
          </div>
        ))}
      </div>

      {/* Step Content */}
      <div className="mb-8 p-6 bg-white rounded shadow-md w-full max-w-lg text-center">
        {renderStepContent(currentStep)}
      </div>

      {/* Navigation Buttons */}
      <div className="flex gap-4">
        <button
          onClick={prevStep}
          disabled={currentStep === 0}
          className={`px-4 py-2 rounded ${
            currentStep === 0
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          Previous
        </button>
        <button
          onClick={nextStep}
          disabled={currentStep === steps.length - 1}
          className={`px-4 py-2 rounded ${
            currentStep === steps.length - 1
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-blue-500 hover:bg-blue-600 text-white"
          }`}
        >
          {currentStep === steps.length - 1 ? "Complete" : "Next"}
        </button>
      </div>
    </div>
  );
};

export default Stepper;
