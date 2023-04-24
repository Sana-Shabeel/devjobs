import React, { useEffect, useState } from "react";
import Image from "next/image";
interface FilterProps {
  icon: string;
  placeholder: string;
  width?: string;
  hidden?: string;
  name: string;
  showIcon: boolean;
  onChange: (value: {}) => void;
}

const Filter = ({
  icon,
  placeholder,
  width,
  hidden,
  name,
  showIcon,
  onChange,
}: FilterProps) => {
  return (
    <div
      className={`${width} ${hidden} items-center md:flex md:basis-44 lg:m-8`}
    >
      <Image
        src={icon}
        className={`${
          showIcon === true ? "block" : "hidden"
        } mr-2 mt-1 md:inline `}
        width={20}
        height={20}
        alt="search icon"
      />

      <input
        type="text"
        name={name}
        placeholder={placeholder}
        onChange={(e) => onChange({ [e.target.name]: e.target.value })}
        className="overflow-hidden rounded-md pl-3 outline-0 hover:outline-0"
      />
    </div>
  );
};

export default Filter;
