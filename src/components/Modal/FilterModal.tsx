import { useState } from "react";
import RadioInput from "../FilterTab/RadioInput";
import Filter from "../FilterTab/Filter";
import Image from "next/image";

interface FilterModalProps {
  selectedValue: boolean;
  handleInputChange: (value: {}) => void;
  handleRadioChange: (value: boolean) => void;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}

function FilterModal({
  setShowModal,
  handleInputChange,
  selectedValue,
  handleRadioChange,
}: FilterModalProps) {
  return (
    <>
      <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto overflow-x-hidden outline-none focus:outline-none">
        <div
          className="relative mx-4
         my-6 w-auto max-w-3xl"
        >
          {/*  content  */}
          <div className="relative flex w-full flex-col rounded-lg border-0 bg-white shadow-lg outline-none focus:outline-none">
            {/*    body    */}
            <div className="relative flex-auto  px-3">
              <Filter
                icon="/assets/desktop/icon-location.svg"
                placeholder="Filter by location..."
                width="max-w-[15rem] h-20"
                hidden="flex"
                name="location"
                showIcon={true}
                onChange={handleInputChange}
              />
              <div className="DIVIDER mx-3 hidden h-[5rem] w-[10px] bg-lightGray md:block " />

              <RadioInput
                label="Full Time"
                value="Fulltime"
                checked={selectedValue}
                onChange={handleRadioChange}
                hidden="flex h-20"
              />
            </div>

            {/*footer*/}
            <div className="flex items-center justify-end rounded-b border-t border-solid border-slate-200 p-6">
              <button
                className="background-transparent mb-1 mr-1 px-6 py-2 text-sm font-bold uppercase text-red-500 outline-none transition-all duration-150 ease-linear focus:outline-none"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
              <button
                className="mb-1 mr-1 rounded bg-emerald-500 px-6 py-3 text-sm font-bold uppercase text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-emerald-600"
                type="button"
                onClick={() => setShowModal(false)}
              >
                Save Changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed inset-0 z-40 bg-black opacity-25"></div>
    </>
  );
}

export default FilterModal;
