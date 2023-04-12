import React from "react";
import Image from "next/image";

const JobCard = () => {
  return (
    <div className="w-327  md:w-339 xl:w-351 mx-auto px-5 pb-6 rounded-md  bg-white my-6">
      <div
        className="w-14 h-14 flex justify-center items-center rounded-xl relative top-[-22px] "
        style={{ background: "hsl(36, 87%, 49%)" }}
      >
        <Image
          src="/assets/logos/scoot.svg"
          width="44"
          height="44"
          alt="company logo"
        />
      </div>
      <div>
        <div className="flex justify-start items-center text-gray gap-5 mb-3 ">
          <span>5h ago</span>
          <span className="w-1 h-1 rounded bg-gray"></span>
          <span className="text-gray ">Full Time</span>
        </div>
        <h1 className="text-xl font-bold">Senior Software Engineer</h1>
        <span className="block text-gray mb-8">Scoot</span>
        <h3 className="text-violet font-bold ">United Kingdom</h3>
      </div>
    </div>
  );
};

export default JobCard;
