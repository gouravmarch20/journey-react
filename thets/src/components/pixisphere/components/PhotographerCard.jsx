
import React from "react";

const PhotographerCard = ({ photographer, handleViewProfile }) => {
  return (
    <div className="border rounded shadow p-4">
      <img
        src={photographer.profilePic}
        alt={photographer.name}
        className="w-full h-40 object-cover rounded mb-2"
      />
      <h3 className="text-lg font-bold">{photographer.name}</h3>
      <p>{photographer.location}</p>
      <p>₹{photographer.price}</p>
      <p>⭐ {photographer.rating}</p>
      <button onClick={() => handleViewProfile(photographer)}>
        View Profie
      </button>
    </div>
  );
};

export default PhotographerCard;
