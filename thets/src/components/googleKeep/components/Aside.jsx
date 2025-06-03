import React from "react";
import { useRouter } from "next/navigation";

const Aside = ({ allInfo = [] }) => {
  const router = useRouter()

  const handleUrlNavigate = (labelN) => {
    const label = `?label=${labelN}`;
    router.push(label);
  };
  return (
    <div>
      {allInfo?.map((k) => (
        <div key={k?._id} className="p-2 ">
          <div onClick={() => handleUrlNavigate(k.labelN)}>{k.labelN}</div>
        </div>
      ))}
      {/* <div className="p-2">Edit</div>
      <div className="p-2">Archive</div>
      <div className="p-2">Trash</div> */}
    </div>
  );
};

export default Aside;
