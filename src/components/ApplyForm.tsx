import axios from "axios";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { formatPhoneNumberIntl } from "react-phone-number-input";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import "react-phone-number-input/style.css";
import { useMutation, useQueryClient } from "react-query";

interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  city: string;
}

const sendApplication = async (data: {}) => {
  const { data: response } = await axios.post("/api/post", data);
  return response.data;
};

interface Props {
  closeModal: () => void;
  setSuccess: (state: boolean) => void;
}

const ApplyForm = ({ closeModal, setSuccess }: Props) => {
  const { register, handleSubmit, watch, control } = useForm();

  const queryClient = useQueryClient();

  // post data to server
  const { mutate, isLoading } = useMutation(sendApplication, {
    onSuccess: (data) => {
      console.log(data);
      setSuccess(true);
    },
  });

  const onSubmit = (data: {}) => {
    const employee = {
      ...data,
    };
    mutate(employee);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="mt-6 grid grid-cols-1 gap-6">
        <div>
          <label
            htmlFor="name"
            className="text-gray-700 block text-sm font-medium"
          >
            Full name
          </label>
          <div className="mt-2">
            <input
              {...register("fullName")}
              className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-violet sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-gray-700 block text-sm font-medium"
          >
            Email
          </label>
          <div className="mt-1">
            <input
              {...register("email")}
              className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-violet sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-gray-700 block text-sm font-medium"
          >
            City, State
          </label>
          <div className="mt-1">
            <input
              {...register("email")}
              className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-violet sm:text-sm"
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="email"
            className="text-gray-700 block text-sm font-medium"
          >
            Phone Number
          </label>
          <div className="mt-1">
            <PhoneInputWithCountry
              name="phone"
              control={control}
              defaultCountry="US"
              rules={{ required: true }}
            />
          </div>
        </div>
        <div className="mt-4 grid place-items-center">
          <button
            type="submit"
            className="rounded-md border border-transparent bg-blue-500 px-28 py-3 text-center text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            Send
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApplyForm;
