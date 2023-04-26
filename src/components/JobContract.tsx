import React from "react";

interface Props {
  date: string;
  contract: string;
}

const JobContract = ({ date, contract }: Props) => {
  return (
    <div className="mb-3 flex items-center justify-start gap-5 text-gray ">
      <span>1w ago</span>
      <span className="h-1 w-1 rounded bg-gray"></span>
      <span className="text-gray">Part Time</span>
    </div>
  );
};

export default JobContract;
