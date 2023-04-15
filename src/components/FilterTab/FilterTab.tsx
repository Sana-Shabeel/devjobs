import React, { useEffect, useState } from "react";
import Image from "next/image";
import Filter from "./Filter";
import RadioInput from "./RadioInput";
import FilterModal from "../Modal/FilterModal";

const FilterTab = () => {
  const [isMobile, setIsMobile] = useState(false);

  const [selectedValue, setSelectedValue] = useState(false);

  const [inputValue, setInputValue] = useState({
    title: "",
    location: "",
  });

  const handleRadioChange = (value: boolean) => {
    setSelectedValue(value);
  };

  const handleInputChange = (value: {}) => {
    setInputValue({ ...inputValue, ...value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    console.log({
      fulltime: selectedValue,
      title: inputValue.title,
      location: inputValue.location,
    });
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
    <>
      <form
        onSubmit={onSubmit}
        className="mx-auto my-6 flex h-[5rem] w-327 items-center rounded-md bg-white md:w-auto lg:justify-start"
      >
        <Filter
          icon="/assets/desktop/icon-search-violet.svg"
          placeholder={
            isMobile
              ? "Filter by title"
              : "Filter by title, companies, expertise."
          }
          width="lg:basis-[45%] ml-8"
          name="title"
          onChange={handleInputChange}
        />
        <div className="DIVIDER mx-3 hidden h-[5rem] w-[1px] bg-lightGray md:block " />
        <Filter
          icon="/assets/desktop/icon-location.svg"
          placeholder="Filter by location..."
          width="lg:basis-[20%]"
          hidden="hidden"
          name="location"
          onChange={handleInputChange}
        />
        <div className="DIVIDER mx-3 hidden h-[5rem] w-[1px] bg-lightGray md:block " />
        <div onClick={true} className="mx-4 cursor-pointer md:hidden">
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
          value="Fulltime"
          checked={selectedValue}
          onChange={handleRadioChange}
          hidden="sm:hidden"
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="mr-2 grid h-12 w-12 place-items-center rounded bg-violet md:mr-4 md:w-20 lg:w-32"
        >
          <Image
            src="/assets/desktop/icon-search-white.svg"
            className="md:hidden "
            width={20}
            height={20}
            alt="search icon"
          />
          <span className="hidden text-center text-white md:inline">
            Search
          </span>
        </button>
      </form>
    </>
  );
};

export default FilterTab;
