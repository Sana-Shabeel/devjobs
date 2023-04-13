import React, { useEffect, useState } from "react";
import Image from "next/image";
import Filter from "./Filter";
import RadioInput from "./RadioInput";

const FilterTab = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [selectedValue, setSelectedValue] = useState("");

  const handleInputChange = (value: string) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Check initial window size and add listener for changes
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <form className="mx-auto my-6 flex h-[5rem] w-327 items-center rounded-md bg-white md:w-auto lg:justify-start">
      <Filter
        icon="/assets/desktop/icon-search-violet.svg"
        placeholder={
          isMobile
            ? "Filter by title"
            : "Filter by title, companies, expertise."
        }
        width="lg:basis-[45%] ml-8"
      />
      <div className="DIVIDER mx-3 hidden h-[5rem] w-[1px] bg-lightGray md:block " />
      <Filter
        icon="/assets/desktop/icon-location.svg"
        placeholder="Filter by location..."
        width="lg:basis-[20%]"
        hidden="hidden"
      />
      <div className="DIVIDER mx-3 hidden h-[5rem] w-[1px] bg-lightGray md:block " />

      <div className="mx-4 cursor-pointer md:hidden">
        <Image
          src="/assets/mobile/icon-filter.svg"
          className=""
          width={20}
          height={20}
          alt="search icon"
        />
      </div>

      <RadioInput
        label="Full Time"
        value="option1"
        checked={selectedValue === "option1"}
        onChange={handleInputChange}
      />

      <button className="mr-6 grid h-12 w-12 place-items-center rounded bg-violet md:w-20 lg:w-32">
        <Image
          src="/assets/desktop/icon-search-white.svg"
          className="md:hidden "
          width={20}
          height={20}
          alt="search icon"
        />
        <span className="hidden text-center text-white md:inline">Search</span>
      </button>
    </form>
  );
};

export default FilterTab;
