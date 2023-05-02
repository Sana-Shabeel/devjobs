import React from "react";
import Image from "next/image";
import { Job } from "@/Types/model";

interface Props {
  job: Job | undefined;
}

const DetailNavbar = ({ job }: Props) => {
  const website = job?.company?.split(" ").join("").toLowerCase() + ".com";
  return (
    <div
      className="mx-auto mt-[-1rem] flex w-327 flex-col items-center  
    justify-center gap-6 rounded-md bg-white pb-6 dark:bg-darkBlue md:h-36 md:w-689 md:flex-row md:justify-between md:pb-0 md:pr-8 xl:w-[730px]"
    >
      <div
        className="mt-[-1.5rem] grid h-14 w-14 place-items-center items-center rounded-xl md:m-0 md:h-36 md:w-36 md:rounded-l-md md:rounded-r-none"
        style={{ background: job?.logoBackground }}
      >
        <Image src={job?.logo as string} width="80" height="40" alt="logo" />
      </div>

      <div className=" text-center md:relative md:-left-12 md:text-left xl:-left-20">
        <h2 className="text-2xl font-bold tracking-wide ">{job?.company}</h2>
        <span className="mt-3 font-light text-darkGray">{website}</span>
      </div>

      <div className="cursor-pointer rounded-md bg-[#EEEFFC] px-6 py-3 hover:bg-[#a7acf5] dark:bg-[#1F273F] dark:hover:bg-[#29355a]">
        <button className="bg-inherit font-semibold text-violet ">
          Company Site
        </button>
      </div>
    </div>
  );
};

export default DetailNavbar;
