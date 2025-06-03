import React from "react";

const PhotographerCard = ({ photographer, handleViewProfile }) => {
  return (
    <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-lg transition">
      <img
        src={photographer.profilePic}
        alt={photographer.name}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold">{photographer.name}</h3>
        <p className="text-gray-600">{photographer.location}</p>
        <p className="text-sm text-gray-500 mt-1">₹{photographer.price} starting</p>
        <p className="text-yellow-500 mt-1">⭐ {photographer.rating}</p>
        <div className="flex flex-wrap mt-2 gap-2">
          {photographer.styles?.map((tag) => (
            <span key={tag} className="text-xs bg-blue-100 text-blue-600 px-2 py-0.5 rounded-full">
              {tag}
            </span>
          ))}
        </div>
        <button
          className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 cursor-pointer"
          onClick={() => handleViewProfile(photographer)}
        >
          View Profile
        </button>
      </div>
    </div>
  );
};

export default PhotographerCard;