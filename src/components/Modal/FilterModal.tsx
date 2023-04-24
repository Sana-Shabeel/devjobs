import { useState } from "react";
import RadioInput from "../FilterTab/RadioInput";
import Filter from "../FilterTab/Filter";
import Image from "next/image";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";

interface FilterModalProps {
  isOpen: boolean;
  selectedValue: boolean;
  onClose: () => void;
  handleInputChange: (value: {}) => void;
  handleRadioChange: (value: boolean) => void;
}

function FilterModal({
  isOpen,
  onClose,
  handleInputChange,
  selectedValue,
  handleRadioChange,
}: FilterModalProps) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay>
          <ModalContent>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Filter
                icon="/assets/desktop/icon-location.svg"
                placeholder="Filter by location..."
                width="max-w-[15rem] h-20"
                hidden="flex"
                name="location"
                showIcon={true}
                onChange={handleInputChange}
              />

              <RadioInput
                label="Full Time"
                value="Fulltime"
                checked={selectedValue}
                onChange={handleRadioChange}
                hidden="flex h-20"
              />
            </ModalBody>
            <ModalFooter>
              <button
                className="mx-auto mb-4 w-4/5 rounded bg-blue-500 py-3 font-bold text-white shadow outline-none transition-all duration-150 ease-linear hover:shadow-lg focus:outline-none active:bg-blue-600"
                type="button"
              >
                Search
              </button>
            </ModalFooter>
          </ModalContent>
        </ModalOverlay>
      </Modal>
    </>
  );
}

export default FilterModal;
