import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import Filter from "../FilterTab/Filter";
import RadioInput from "../FilterTab/RadioInput";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  selectedValue: boolean;
  handleInputChange: (value: {}) => void;
  handleRadioChange: (value: boolean) => void;
  onSubmit: (e: React.FormEvent) => void;
}

export default function FilterModal({
  isOpen,
  closeModal,
  handleInputChange,
  selectedValue,
  handleRadioChange,
  onSubmit,
}: Props) {
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white py-4 text-left align-middle shadow-xl transition-all">
                  <div className="px-6">
                    <Filter
                      icon="/assets/desktop/icon-location.svg"
                      placeholder="Filter by location..."
                      width="max-w-[15rem] h-20"
                      hidden="flex"
                      name="location"
                      showIcon={true}
                      onChange={handleInputChange}
                    />
                  </div>
                  <div className="DIVIDER h-[2px] w-full bg-lightGray " />

                  <div className="px-6">
                    <RadioInput
                      label="Full Time Only"
                      value="Fulltime"
                      checked={selectedValue}
                      onChange={handleRadioChange}
                      hidden="flex h-20"
                    />
                  </div>

                  <div className="mt-4 grid place-items-center">
                    <button
                      type="button"
                      className="rounded-md border border-transparent bg-blue-500 px-28 py-3 text-center text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={(e) => {
                        closeModal();
                        onSubmit(e);
                      }}
                    >
                      Search
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
