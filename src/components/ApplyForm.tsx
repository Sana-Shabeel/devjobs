import React from "react";
import { useForm } from "react-hook-form";

const ApplyForm = () => {
  const { register, handleSubmit, watch } = useForm();

  return (
    <form>
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
              className="border-gray-300 block w-full rounded-md border py-2 shadow-sm outline-none focus:border-b-4 focus:border-violet sm:text-sm"
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
              className="border-gray-300 block w-full rounded-md border py-2 shadow-sm outline-none focus:border-b-4 focus:border-violet sm:text-sm"
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
              className="border-gray-300 block w-full rounded-md border py-2 shadow-sm outline-none focus:border-b-4 focus:border-violet sm:text-sm"
            />
          </div>
        </div>
      </div>
    </form>
  );
};

export default ApplyForm;
