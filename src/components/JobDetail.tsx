import React from "react";
import JobContract from "./JobContract";

const JobDetail = () => {
  return (
    <section className="mx-auto my-8 w-327 rounded-md bg-white p-4 dark:bg-midnight md:w-689 md:px-8 xl:w-[730px]">
      <div className="flex flex-col md:flex-row md:justify-between">
        <div className="grid gap-4 md:gap-2">
          <JobContract date="1w ago" contract="Part Time" />
          <h1 className="text-xl font-bold text-inherit md:text-2xl">
            Senior Software Engineer
          </h1>
          <h3 className="font-bold text-violet">United Kingdrom</h3>
        </div>
        <div className="text-center">
          <button className="mb-3 mt-8 rounded-md bg-violet px-24 py-3 font-medium tracking-wide text-white md:px-10">
            Apply Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default JobDetail;
