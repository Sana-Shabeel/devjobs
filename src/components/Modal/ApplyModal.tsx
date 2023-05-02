import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import ApplyForm from "../ApplyForm";
import { Job } from "@/Types/model";

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  job: Job | undefined;
}

export default function ApplyModal({ isOpen, closeModal, job }: Props) {
  const [sendApplication, setSendApplication] = useState({
    onSuccess: false,
    onError: false,
  });

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
                      sendApplication.onSuccess
                        ? "text-center text-2xl font-extrabold"
                        : ""
                    } text-gray-900 text-lg font-bold leading-6 md:text-xl`}
                  >
                    {sendApplication.onSuccess
                      ? "Thank you!"
                      : `Apply to ${job?.position}`}
                  </Dialog.Title>
                  {sendApplication.onSuccess ? (
                    <div className="mt-6">
                      <div className="wrapper">
                        <svg
                          className="checkmark"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 52 52"
                        >
                          <circle
                            className="checkmark__circle"
                            cx="26"
                            cy="26"
                            r="25"
                            fill="none"
                          />
                          <path
                            className="checkmark__check"
                            fill="none"
                            d="M14.1 27.2l7.1 7.2 16.7-16.8"
                          />
                        </svg>
                      </div>
                      <p className="text-gray-500 text-lg">
                        {`Thank you for your interest in the ${job?.position} position. We will be in touch if we need further information.`}
                      </p>
                    </div>
                  ) : (
                    <ApplyForm
                      closeModal={closeModal}
                      setSendApplication={setSendApplication}
                      sentApplication={sendApplication}
                      jobId={job?.id}
                    />
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
