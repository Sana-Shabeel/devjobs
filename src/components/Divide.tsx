import React from "react";
interface Props {
  className?: string;
}

const Divide = ({ className }: Props) => {
  return (
    <div className={`${className} bg-lightGray dark:bg-darkGray md:block`} />
  );
};

export default Divide;
