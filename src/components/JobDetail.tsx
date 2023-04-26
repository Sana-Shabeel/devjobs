import React from "react";
import JobContract from "./JobContract";

const JobDetail = () => {
  return (
    <section className="mx-auto my-8 w-327 bg-white p-4 dark:bg-midnight">
      <div className="grid gap-4">
        <JobContract date="1w ago" contract="Part Time" />
        <h1 className="text-xl font-bold text-inherit">
          Senior Software Engineer
        </h1>
        <h3 className="font-bold text-violet">United Kingdrom</h3>
      </div>

      <div className="text-center">
        <button className="mb-3 mt-8 rounded-md bg-violet px-24 py-3 font-medium tracking-wide text-white">
          Apply Now
        </button>
      </div>
    </section>
  );
};

export default JobDetail;
