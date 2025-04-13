import React, { useState, useEffect } from "react";

const TrafficLightSystem = () => {
  const [currentLight, setCurrentLight] = useState("red"); // Stores active light
  const [manualOverride, setManualOverride] = useState(false);

  // Timers for each light
  const lightDurations = {
    red: 10,
    yellow: 5,
    green: 15,
  };

  useEffect(() => {
    if (manualOverride) return; // Stop automatic cycle if manually overridden

    let timer = setTimeout(() => {
      setCurrentLight((prevLight) => {
        if (prevLight === "red") return "yellow";
        if (prevLight === "yellow") return "green";
        return "red"; // Loops back to red
      });
    }, lightDurations[currentLight] * 1000);

    return () => clearTimeout(timer);
  }, [currentLight, manualOverride]); // Runs when light changes

  // Manually activate a light and stop auto-switching
  const activateLight = (color) => {
    setManualOverride(true);
    setCurrentLight(color);
  };

  return (
    <div className="flex flex-col items-center p-6 bg-gray-100 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Traffic Light System</h1>

      {/* Traffic Light */}
      <div className="flex flex-col gap-4 p-6 bg-black rounded-lg shadow-lg">
        <div className={`h-24 w-24 rounded-full transition-all duration-500 ${currentLight === "red" ? "bg-red-500" : "bg-gray-700"}`} />
        <div className={`h-24 w-24 rounded-full transition-all duration-500 ${currentLight === "yellow" ? "bg-yellow-500" : "bg-gray-700"}`} />
        <div className={`h-24 w-24 rounded-full transition-all duration-500 ${currentLight === "green" ? "bg-green-500" : "bg-gray-700"}`} />
      </div>

      {/* Manual Override Buttons */}
      <div className="mt-6 space-x-3">
        <button onClick={() => activateLight("red")} className="px-4 py-2 bg-red-500 text-white rounded-md shadow hover:bg-red-600">Activate Red</button>
        <button onClick={() => activateLight("yellow")} className="px-4 py-2 bg-yellow-500 text-white rounded-md shadow hover:bg-yellow-600">Activate Yellow</button>
        <button onClick={() => activateLight("green")} className="px-4 py-2 bg-green-500 text-white rounded-md shadow hover:bg-green-600">Activate Green</button>
      </div>

      {/* Display Timers */}
      <div className="mt-4 text-center">
        <p className="text-lg">🔴 Red Timer: {lightDurations.red}s</p>
        <p className="text-lg">🟡 Yellow Timer: {lightDurations.yellow}s</p>
        <p className="text-lg">🟢 Green Timer: {lightDurations.green}s</p>
      </div>
    </div>
  );
};

export default TrafficLightSystem;
