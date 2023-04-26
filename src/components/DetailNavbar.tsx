import React from "react";
import Image from "next/image";

const DetailNavbar = () => {
  return (
    <div className="mx-auto mt-[-1rem] flex w-327 flex-col items-center justify-center gap-6 rounded-md bg-white pb-6 dark:bg-darkBlue">
      <div
        className="mt-[-1.5rem] grid h-14 w-14 place-items-center items-center rounded-xl"
        style={{ background: "hsl(36, 87%, 49%)" }}
      >
        <Image
          src="/assets/logos/scoot.svg"
          width="50"
          height="50"
          alt="logo"
        />
      </div>

      <div className="text-center">
        <h2 className="">Scoot</h2>
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
