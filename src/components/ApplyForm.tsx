import { Dispatch, SetStateAction } from "react";
import axios from "axios";
import { useForm } from "react-hook-form";
import PhoneInputWithCountry from "react-phone-number-input/react-hook-form";
import { useMutation } from "react-query";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import LoadingSpinner from "./LoadingSpinner";
import { FormValues, SentApplicationProps } from "@/Types/model";
import "react-phone-number-input/style.css";

const sendApplication = async (data: FormValues) => {
  const { data: response } = await axios.post("/api/post", data);
  console.log(data);

  return response.data;
};

const schema = z.object({
  fullName: z.string().nonempty().min(3),
  email: z.string().email(),
  city: z.string().nonempty(),
  phone: z.string().nonempty(),
});

interface Props {
  closeModal: () => void;
  setSendApplication: Dispatch<
    SetStateAction<{ onSuccess: boolean; onError: boolean }>
  >;
  sentApplication: SentApplicationProps;
  jobId: number | undefined;
}

const ApplyForm = ({
  closeModal,
  setSendApplication,
  sentApplication,
  jobId,
}: Props) => {
  const { register, handleSubmit, watch, control, formState } = useForm({
    resolver: zodResolver(schema),
  });

  const { errors } = formState;

  // send application data to server
  const { mutate, isLoading } = useMutation(sendApplication, {
    onSuccess: (data) => {
      setSendApplication({
        onSuccess: true,
        onError: false,
      });
    },
    onError: (error) => {
      setSendApplication({
        onSuccess: false,
        onError: true,
      });
    },
  });

  const onSubmit = (FormValues: {}) => {
    const applicationData = {
      ...FormValues,
      jobId: jobId,
    };

    mutate(applicationData as FormValues);
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
            {errors.fullName && (
              <p className="mt-1 text-sm text-red-500">
                Please enter your full name.
              </p>
            )}
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
            {errors.email && (
              <p className="mt-1 text-sm text-red-500">
                Please enter a valid email address.
              </p>
            )}
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
              {...register("city")}
              className="border-gray-300 block w-full rounded-md border py-2 pl-3 shadow-sm outline-none focus:border-b-4 focus:border-violet sm:text-sm"
            />
            {errors.city && (
              <p className="mt-1 text-sm text-red-500">
                Please enter your city or state.
              </p>
            )}
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
            {errors.phone && (
              <p className="mt-1 text-sm text-red-500">
                Please enter your phone number.
              </p>
            )}
          </div>
        </div>
        <div className="mt-4 grid place-items-center">
          {sentApplication.onError ? (
            <p className="mb-2 text-sm text-red-500">
              Something went wrong. Please try again.
            </p>
          ) : null}
          <button
            type="submit"
            className="rounded-md border border-transparent bg-blue-500 px-28 py-3 text-center text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
          >
            {isLoading ? (
              <div className="flex items-center justify-center gap-2">
                <LoadingSpinner color="#F4F6F8" size="h-4 w-4" />
                Sending...
              </div>
            ) : (
              "Send Application"
            )}
          </button>
        </div>
      </div>
    </form>
  );
};

export default ApplyForm;
