import React, { useState } from "react";
import Image from "next/image";

interface Props {
  label: string;
  value: string;
  checked: boolean;
  onChange: (value: boolean) => void;
}

function RadioInput({ label, value, checked, onChange }: Props) {
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = () => {
    setIsChecked(!isChecked);
    onChange(!isChecked);
  };

  return (
    <div
      className="hidden items-center gap-3 md:flex md:basis-40 lg:ml-6 lg:basis-[20%]"
      onClick={handleClick}
    >
      <div
        className={`grid h-6 w-6  place-items-center rounded ${
          isChecked ? "bg-violet" : "bg-lightGray"
        }`}
      >
        {isChecked && (
          <Image
            src="/assets/desktop/icon-check.svg"
            width={20}
            height={20}
            alt="Check mark"
          />
        )}
      </div>
      <label>{label}</label>
    </div>
  );
}

export default RadioInput;
