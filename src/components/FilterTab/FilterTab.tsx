import React, { useEffect, useState } from "react";
import Image from "next/image";
import Filter from "./Filter";
import RadioInput from "./RadioInput";
import FilterModal from "../Modal/FilterModal";
import { FilterType } from "@/pages";
import Divide from "../Divide";

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
    const mediaQuery = window.matchMedia("(max-width: 1201px)");

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
        className="mx-auto mb-8 mt-[-3rem] flex h-[5rem] w-327 items-center justify-between rounded-md bg-white px-4 dark:bg-darkBlue sm:w-689 lg:justify-start xl:w-1110"
      >
        <Filter
          icon="/assets/desktop/icon-search-violet.svg"
          placeholder={
            isMobile
              ? "Filter by title..."
              : "Filter by title, companies, expertise..."
          }
          width="sm:w-[80%] sm:ml-8 md:w-[35%] md:ml-0 xl:w-[50%]"
          name="title"
          onChange={handleInputChange}
          showIcon={false}
        />
        <Divide className="mx-3 hidden h-[5rem] w-[1px]" />
        <Filter
          icon="/assets/desktop/icon-location.svg"
          placeholder="Filter by location…"
          width="md:basis-[30%] md:ml-3"
          hidden="hidden"
          showIcon={false}
          name="location"
          onChange={handleInputChange}
        />
        <Divide className="mx-3 hidden h-[5rem] w-[1px]" />
        <div
          onClick={() => setShowModal(true)}
          className="mx-3 w-28 cursor-pointer overflow-hidden sm:pl-10 md:hidden"
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
        <div className="rounded bg-violet hover:bg-lightViolet">
          <button
            className="grid h-12 w-12 place-items-center sm:w-20"
            type="submit"
            onClick={onSubmit}
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
        </div>
      </form>
    </>
  );
};

export default FilterTab;
