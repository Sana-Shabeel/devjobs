import React from "react";

type Props = {
  text: string;
};

const Button = ({ text }: Props) => {
  return (
    <button className="px-8 py-4 rounded-md bg-violet text-white hover:bg-lightViolet">
      {text}
    </button>
  );
};

export default Button;
