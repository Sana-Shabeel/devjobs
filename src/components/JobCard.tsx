import React from "react";
import Image from "next/image";
import JobContract from "./JobContract";
import Link from "next/link";
interface JobCardProps {
  job: {
    id: number;
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
    <div className="mx-auto  my-6 w-327 rounded-2xl bg-white px-5 pb-6 dark:bg-darkBlue  md:w-339 xl:w-351">
      <div
        className="relative top-[-22px] flex h-14 w-14 items-center justify-center rounded-xl "
        style={{ background: job.logoBackground }}
      >
        <Image src={job.logo} width="20" height="20" alt="company logo" />
      </div>
      <div>
        <JobContract date={job.postedAt} contract={job.contract} />

        <Link href={`${job.company}${job.id}`}>
          <h1 className="text-xl font-bold text-inherit hover:text-darkGray">
            {job.position}
          </h1>
        </Link>
        <span className="mb-8 mt-2 block font-light tracking-wide text-gray">
          {job.company}
        </span>
        <h3 className="font-bold text-violet ">{job.location}</h3>
      </div>
    </div>
  );
};

export default JobCard;
