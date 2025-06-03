"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import InquiryModal from './components/InquiryModal'
import Breadcrumbs from './components/Breadcrumbs'

const ProfilePage = () => {
  const { id } = useParams();
  const [photographer, setPhotographer] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showInquiryModal, setShowInquiryModal] = useState(false);

  useEffect(() => {
    if (!id) return;

    fetch("/api/photographers")
      .then((res) => res.json())
      .then((data) => {
        const found = data.find((p) => String(p.id) === String(id));
        setPhotographer(found || null);
        setLoading(false);
      })
      .catch(() => {
        setPhotographer(null);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <p className="p-4">Loading...</p>;
  if (!photographer) return <p className="p-4">No data available.</p>;

  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Profile Header */}
      <Breadcrumbs/>
      <div className="flex gap-6 items-center">
        <img
          src={photographer.profilePic}
          alt={photographer.name}
          className="w-32 h-32 object-cover rounded-lg"
        />
        <div>
          <h1 className="text-3xl font-bold">{photographer.name}</h1>
          <p className="text-gray-600 mb-1">{photographer.bio}</p>
          <p className="text-sm text-gray-500">📍 {photographer.location}</p>
          <p className="text-sm text-gray-500">⭐ {photographer.rating} / 5</p>
          <p className="text-sm text-gray-700 font-semibold mt-1">₹{photographer.price}</p>
        </div>
      </div>

      {/* Styles and Tags */}
      <div className="mt-4 flex flex-wrap gap-2">
        {photographer.styles.map((style) => (
          <span key={style} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm">
            {style}
          </span>
        ))}
        {photographer.tags.map((tag) => (
          <span key={tag} className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
            #{tag}
          </span>
        ))}
      </div>

      {/* Portfolio Grid */}
      <div className="mt-6">
        <h2 className="text-xl font-semibold mb-2">Portfolio</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
          {photographer.portfolio.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`Portfolio ${index + 1}`}
              className="rounded-lg w-full object-cover h-40"
            />
          ))}
        </div>
      </div>

      {/* Reviews */}
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-2">Reviews</h2>
        {photographer.reviews.length === 0 ? (
          <p className="text-gray-500">No reviews yet.</p>
        ) : (
          photographer.reviews.map((review, idx) => (
            <div key={idx} className="border-t py-3">
              <p className="font-semibold">{review.name}</p>
              <p className="text-yellow-600">Rating: {review.rating} / 5</p>
              <p className="text-gray-700">{review.comment}</p>
              <p className="text-xs text-gray-500">{review.date}</p>
            </div>
          ))
        )}
      </div>

      {/* Send Inquiry Button */}
      <div className="mt-6">
        <button
          onClick={() => setShowInquiryModal(true)}
          className="bg-indigo-600 text-white px-5 py-2 rounded hover:bg-indigo-700"
        >
          Send Inquiry
        </button>
      </div>

      {/* Inquiry Modal */}
      {showInquiryModal && <InquiryModal onClose={() => setShowInquiryModal(false)} />}

    </div>
  );
};

export default ProfilePage;