import React, { useEffect, useState } from "react";
import Image from "next/image";
import Filter from "./Filter";
import RadioInput from "./RadioInput";
import FilterModal from "../Modal/FilterModal";
import { FilterType } from "@/pages";

interface Props {
  filterData: (filter: FilterType) => void;
}

const FilterTab = ({ filterData }: Props) => {
  const [selectedValue, setSelectedValue] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  const [inputValue, setInputValue] = useState({
    title: "",
    location: "",
  });
  const [showModal, setShowModal] = useState(false);

  const handleRadioChange = (value: boolean) => {
    setSelectedValue(value);
  };

  const handleInputChange = (value: {}) => {
    setInputValue({ ...inputValue, ...value });
  };

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    filterData({
      fulltime: selectedValue,
      title: inputValue.title,
      location: inputValue.location,
    });

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
      {showModal && (
        <FilterModal
          isOpen={showModal}
          closeModal={() => setShowModal(false)}
          handleInputChange={handleInputChange}
          selectedValue={selectedValue}
          handleRadioChange={handleRadioChange}
          onSubmit={onSubmit}
        />
      )}

      <form
        onSubmit={onSubmit}
        className="mx-auto mb-8 mt-[-3rem] flex h-[5rem] w-327 items-center justify-between rounded-md bg-white pr-3 md:w-689 md:pr-0 lg:w-1110 lg:justify-start"
      >
        <Filter
          icon="/assets/desktop/icon-search-violet.svg"
          placeholder={
            isMobile
              ? "Filter by title"
              : "Filter by title, companies, expertise..."
          }
          width="w-[60%] lg:basis-[45%] ml-4"
          name="title"
          onChange={handleInputChange}
          showIcon={false}
        />
        <div className="DIVIDER mx-3 hidden h-[5rem] w-[1px] bg-lightGray md:block " />
        <Filter
          icon="/assets/desktop/icon-location.svg"
          placeholder="Filter by location…"
          width="lg:basis-[20%]"
          hidden="hidden"
          showIcon={false}
          name="location"
          onChange={handleInputChange}
        />
        <div className="DIVIDER mx-3 hidden h-[5rem] w-[1px] bg-lightGray md:block " />
        <div
          onClick={() => setShowModal(true)}
          className="mx-3 w-28 cursor-pointer overflow-hidden md:hidden"
        >
          <Image
            src="/assets/mobile/icon-filter.svg"
            width={20}
            height={20}
            alt="search icon"
          />
        </div>
        <RadioInput
          label={isMobile ? "Full Time" : "Full Time Only"}
          value="Fulltime"
          checked={selectedValue}
          onChange={handleRadioChange}
          hidden="hidden"
        />
        <button
          type="submit"
          onClick={onSubmit}
          className="mr-2 grid h-12 w-full place-items-center rounded bg-violet md:mr-4 md:w-20 lg:w-32"
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
