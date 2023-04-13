import React from "react";
import Image from "next/image";

interface FilterProps {
  icon: string;
  placeholder: string;
  width?: string;
  hidden?: string;
}

const Filter = ({ icon, placeholder, width, hidden }: FilterProps) => {
  return (
    <div
      className={`${width} ${hidden} md:auto items-center md:flex md:basis-44 lg:m-8 `}
    >
      <Image
        src={icon}
        className="mr-2 mt-1 hidden md:inline"
        width={18}
        height={18}
        alt="search icon"
      />

      <input
        type="text"
        placeholder={placeholder}
        className="ml-2 min-w-full overflow-hidden rounded-md outline-0 hover:outline-0"
      />
    </div>
  );
};

export default Filter;
