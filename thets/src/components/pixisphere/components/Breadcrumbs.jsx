"use client";

import { usePathname, useRouter } from "next/navigation";
import React from "react";

const Breadcrumbs = () => {
  const pathname = usePathname(); // e.g., /pixisphere/profile/4
  const router = useRouter();

  const segments = pathname.split("/").filter(Boolean);

  const crumbs = [
    {
      name: "Home",
      href: "/pixisphere",
      isActive: segments.length === 1,
    },
  ];

  if (segments.includes("citywise")) {
    crumbs.push({
      name: "Citywise",
      href: "/pixisphere/citywise",
      isActive: segments.includes("citywise") && segments.length === 2,
    });
  }

  if (segments.includes("profile")) {
    crumbs.push({
      name: "Profile",
      href: pathname,
      isActive: true,
    });
  }

  return (
    <nav className="bg-gray-100 rounded-xl shadow-sm p-4 mb-6 flex justify-center">
      <ol className="flex items-center gap-3 text-sm text-gray-700">
        {crumbs.map((crumb, index) => (
          <li key={crumb.href} className="flex items-center gap-2">
            {index > 0 && <span className="text-gray-400 text-2xl">›</span>}
            <button
              onClick={() => !crumb.isActive && router.push(crumb.href)}
              disabled={crumb.isActive}
              className={`transition duration-200 text-xl ${
                crumb.isActive
                  ? "text-black font-semibold cursor-default"
                  : "text-blue-600 hover:underline"
              }`}
            >
              {crumb.name}
            </button>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;