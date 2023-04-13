import React from "react";
import Image from "next/image";

interface FilterProps {
  icon: string;
  placeholder: string;
}

const Filter = ({ icon, placeholder }: FilterProps) => {
  return (
    <div className="flex items-center md:auto">
      <Image
        src={icon}
        className="hidden md:inline mt-1 mr-2"
        width={18}
        height={18}
        alt="search icon"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="w-auto rounded-md   hover:outline-0"
      />
    </div>
  );
};

export default Filter;
