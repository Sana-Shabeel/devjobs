import React from "react";
import Image from "next/image";
interface JobCardProps {
  job: {
    company: string;
    logo: string;
    logoBackground: string;
    position: string;
    postedAt: string;
    contract: string;
    location: string;
  };
}

const JobCard = ({ job }: JobCardProps) => {
  return (
    <div className="w-327  md:w-339 xl:w-351 mx-auto px-5 pb-6 rounded-md  bg-white my-6">
      <div
        className="w-14 h-14 flex justify-center items-center rounded-xl relative top-[-22px] "
        style={{ background: job.logoBackground }}
      >
        <Image src={job.logo} width="44" height="44" alt="company logo" />
      </div>
      <div>
        <div className="flex justify-start items-center text-gray gap-5 mb-3 ">
          <span>{job.postedAt}</span>
          <span className="w-1 h-1 rounded bg-gray"></span>
          <span className="text-gray ">{job.contract}</span>
        </div>
        <h1 className="text-xl font-bold">{job.position}</h1>
        <span className="block text-gray mb-8 mt-2">{job.company}</span>
        <h3 className="text-violet font-bold ">{job.location}</h3>
      </div>
    </div>
  );
};

export default JobCard;
