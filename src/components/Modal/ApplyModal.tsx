import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ApplyForm from "../ApplyForm";
import { useMutation, useQueryClient } from "react-query";
import axios from "axios";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  position: string;
}

export default function ApplyModal({ isOpen, closeModal, position }: Props) {
  const [succes, setSucces] = useState(false);

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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className={`${
                      succes ? "text-green-500" : "text-gray-900"
                    } text-lg font-bold leading-6 md:text-xl`}
                  >
                    {succes
                      ? "Your application was submitted"
                      : `Apply to ${position}`}
                  </Dialog.Title>
                  {succes ? (
                    <div className="mt-6">
                      <p className="text-gray-500 text-lg">
                        Your application was submitted successfully. We will get
                        back to you as soon as possible.
                      </p>
                    </div>
                  ) : (
                    <ApplyForm closeModal={closeModal} setSuccess={setSucces} />
                  )}
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
