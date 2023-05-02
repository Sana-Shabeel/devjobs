import { Job } from "@/Types/model";
import React from "react";
interface Props {
  title: string | undefined;
  applications: Job["applications"] | undefined;
  openModal: () => void;
}

const DetailFooter = ({ title, applications, openModal }: Props) => {
  return (
    <div className="bg-white dark:bg-darkBlue">
      <div className="mx-auto flex justify-between md:w-689 xl:w-[730px]">
        <div className=" hidden rounded-md bg-white p-6 dark:bg-darkBlue md:block ">
          <h2 className="text-xl font-bold text-inherit md:text-2xl">
            {title}
          </h2>
          <p className="font-light leading-loose text-darkGray">
            {applications?.length === 0
              ? "0 applicants - be the first to apply to this position."
              : `${applications?.length} applicants`}
          </p>
        </div>
        <div className="mx-auto text-center md:mx-0">
          <button
            onClick={openModal}
            className="mb-3 mt-8 rounded-md bg-violet px-[7.5rem] py-3 font-medium tracking-wide text-white hover:bg-lightViolet md:px-10"
          >
            Apply Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailFooter;
