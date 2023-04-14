import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
} from "@chakra-ui/react";
import RadioInput from "../FilterTab/RadioInput";
import Filter from "../FilterTab/Filter";

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
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Filter
              icon="/assets/desktop/icon-location.svg"
              placeholder="Filter by location..."
              width="lg:basis-[20%]"
              hidden="hidden"
              name="location"
              onChange={handleInputChange}
            />
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
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default FilterModal;
