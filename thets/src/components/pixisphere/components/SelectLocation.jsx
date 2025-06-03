// 'use client';
// import React from "react";
// import { useRouter, usePathname, useSearchParams } from "next/navigation";

// const SelectLocation = ({ avalibleLocation }) => {
//   const router = useRouter();
//   const pathname = usePathname();
//   const searchParams = useSearchParams();

//   const getLocationImage = (location) => {
//     switch (location) {
//       case "Mumbai":
//         return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Marine_Drive_Skyline.jpg/250px-Marine_Drive_Skyline.jpg";
//       case "Delhi":
//         return "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
//       default:
//         return "https://nashikdistrictkabaddiassociation.com/assets/images/NoImageAvailable.jpg";
//     }
//   };

//   const handleClick = (location) => {
//     const params = new URLSearchParams(searchParams.toString());
//     params.set("location", location);
//     router.push(`${pathname}/citywise?${params.toString()}`);
//   };

//   return (
//     <div className="p-4">
//       {avalibleLocation?.length > 0 ? (
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {avalibleLocation.map((location) => (
//             <div
//               key={location}
//               className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer"
//               onClick={() => handleClick(location)}
//             >
//               <img
//                 src={getLocationImage(location)}
//                 alt={location}
//                 className="w-full h-48 object-cover"
//               />
//               <div className="p-4 text-center">
//                 <h4 className="text-lg font-semibold">{location}</h4>
//               </div>
//             </div>
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No location available</p>
//       )}
//     </div>
//   );
// };

// export default SelectLocation;

'use client';
import React from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

const SelectLocation = ({ avalibleLocation }) => {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const getLocationImage = (location) => {
    switch (location) {
      case "Mumbai":
        return "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d6/Marine_Drive_Skyline.jpg/250px-Marine_Drive_Skyline.jpg";
      case "Delhi":
        return "https://images.unsplash.com/photo-1587474260584-136574528ed5?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
      default:
        return "https://nashikdistrictkabaddiassociation.com/assets/images/NoImageAvailable.jpg";
    }
  };

  const handleClick = (location) => {
    const params = new URLSearchParams(searchParams.toString());
    params.set("location", location);
    router.push(`${pathname}/citywise?${params.toString()}`);
  };

  return (
    <div className="p-4">
      {avalibleLocation?.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {avalibleLocation.map((location) => (
            <div
              key={location}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer"
              onClick={() => handleClick(location)}
            >
              <img
                src={getLocationImage(location)}
                alt={location}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg font-semibold">{location}</h4>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No location available</p>
      )}
    </div>
  );
};

export default SelectLocation;