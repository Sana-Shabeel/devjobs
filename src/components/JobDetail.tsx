import React from "react";
import JobContract from "./JobContract";
import data from "../../data/data.json";
import { Job } from "../Types/job";
import JobRequirements from "./JobRequirements";

interface Props {
  job: Job | undefined;
}

const JobDetail = ({ job }: Props) => {
  console.log(job);

  return (
    <section className="mx-auto my-8 w-327 rounded-md bg-white p-6 dark:bg-darkBlue md:w-689 md:px-8 xl:w-[730px]">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="grid gap-4 md:gap-2">
          <JobContract date={job?.postedAt} contract={job?.contract} />
          <h1 className="text-xl font-bold text-inherit md:text-2xl">
            {job?.position}
          </h1>
          <h3 className="font-bold text-violet">{job?.location}</h3>
        </div>
        <div className="text-center">
          <button className="mb-3 mt-8 rounded-md bg-violet px-[5.85rem] py-3 font-medium tracking-wide text-white md:px-10">
            Apply Now
          </button>
        </div>
      </div>

      <div className="my-8">
        <p className="font-light leading-loose text-darkGray">
          {job?.description}
        </p>
      </div>

      <JobRequirements
        job={job?.requirements}
        title="Requirements"
        listStyle="list-disc"
      />
      <JobRequirements
        job={job?.role}
        title="What You Will Do"
        listStyle="list-decimal"
      />
    </section>
  );
};

export default JobDetail;
