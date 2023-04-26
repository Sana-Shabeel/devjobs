import React from "react";
import Image from "next/image";

const DetailNavbar = () => {
  return (
    <div
      className="mx-auto mt-[-1rem] flex w-327 flex-col items-center justify-center  
    gap-6 rounded-md bg-white pb-6 dark:bg-darkBlue md:h-36 md:w-689 md:flex-row md:justify-between md:pb-0 md:pr-8 xl:w-[730px] "
    >
      <div
        className="mt-[-1.5rem] grid h-14 w-14 place-items-center items-center rounded-xl md:m-0 md:h-36 md:w-36 md:rounded-l-md md:rounded-r-none"
        style={{ background: "hsl(36, 87%, 49%)" }}
      >
        <Image
          src="/assets/logos/scoot.svg"
          width="50"
          height="50"
          alt="logo"
        />
      </div>

      <div className="right-24 text-center md:relative md:text-left xl:right-28">
        <h2 className="text-2xl font-bold tracking-wide ">Scoot</h2>
        <span className="text-gray">scoot.com</span>
      </div>

      <div className="rounded-md bg-[#EEEFFC] px-6 py-3 dark:bg-[#1F273F]">
        <button className="bg-inherit font-semibold text-violet">
          Company Site
        </button>
      </div>
    </div>
  );
};

export default DetailNavbar;
