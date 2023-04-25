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
    <div className="mx-auto  my-6 w-327 rounded-md bg-white px-5 pb-6  md:w-339 xl:w-351">
      <div
        className="relative top-[-22px] flex h-14 w-14 items-center justify-center rounded-xl "
        style={{ background: job.logoBackground }}
      >
        <Image src={job.logo} width="44" height="44" alt="company logo" />
      </div>
      <div>
        <div className="mb-3 flex items-center justify-start gap-5 text-gray ">
          <span>{job.postedAt}</span>
          <span className="h-1 w-1 rounded bg-gray"></span>
          <span className="text-gray ">{job.contract}</span>
        </div>
        <h1 className="text-xl font-bold text-darkBlue">{job.position}</h1>
        <span className="mb-8 mt-2 block font-light tracking-wide text-gray">
          {job.company}
        </span>
        <h3 className="font-bold text-violet ">{job.location}</h3>
      </div>
    </div>
  );
};

export default JobCard;
