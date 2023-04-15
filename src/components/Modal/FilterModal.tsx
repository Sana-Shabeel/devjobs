import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/modal";
import RadioInput from "../FilterTab/RadioInput";
import Filter from "../FilterTab/Filter";
import Image from "next/image";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  handleInputChange: (value: {}) => void;
  selectedValue: boolean;
  handleRadioChange: (value: boolean) => void;
}

function FilterModal({
  isOpen,
  onClose,
  handleInputChange,
  selectedValue,
  handleRadioChange,
}: Props) {
  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalBody pt="2rem">
            <div className={` auto flex items-center  `}>
              <Image
                src="/assets/desktop/icon-location.svg"
                className="mr-2 mt-1  inline"
                width={18}
                height={18}
                alt="location icon"
              />

              <input
                type="text"
                name="location"
                placeholder="Filter by location..."
                onChange={(e) =>
                  handleInputChange({ [e.target.name]: e.target.value })
                }
                className="ml-2 min-w-full overflow-hidden rounded-md outline-0 hover:outline-0"
              />
            </div>
            <RadioInput
              label="Full Time"
              value="Fulltime"
              checked={selectedValue}
              onChange={handleRadioChange}
            />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FilterModal;
