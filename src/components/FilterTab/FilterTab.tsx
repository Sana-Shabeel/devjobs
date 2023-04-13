import React from "react";
import Image from "next/image";
import Filter from "./Filter";

const FilterTab = () => {
  return (
    <form className="w-327 h-[5rem] bg-white mx-auto my-6 rounded-md flex items-center justify-between md:w-689 px-4">
      <Filter
        icon="/assets/desktop/icon-search-violet.svg"
        placeholder="Filter by title..."
      />
      <div className="w-[2px] h-[5rem] bg-lightGray DIVIDER" />
      <Filter
        icon="/assets/desktop/icon-location.svg"
        placeholder="Filter by location..."
      />
      <div className="w-[2px] h-[5rem] bg-lightGray DIVIDER " />

      <div className="mx-4 cursor-pointer md:hidden">
        <Image
          src="/assets/mobile/icon-filter.svg"
          className=""
          width={20}
          height={20}
          alt="search icon"
        />
      </div>

      <div className="flex items-center gap-3 ">
        <div className="w-6 h-6 bg-lightGray  grid place-items-center rounded"></div>
        <span>Full time</span>
      </div>

      <button className="w-12 h-12 md:w-20  bg-violet  grid place-items-center rounded ">
        <Image
          src="/assets/desktop/icon-search-white.svg"
          className="md:hidden "
          width={20}
          height={20}
          alt="search icon"
        />
        <span className="hidden md:inline text-center text-white">Search</span>
      </button>
    </form>
  );
};

export default FilterTab;
