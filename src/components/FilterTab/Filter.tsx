import React, { useEffect, useState } from "react";
import Image from "next/image";
interface FilterProps {
  icon: string;
  placeholder: {
    sm: string;
    lg: string;
  };
  width?: string;
  hidden?: string;
  name: string;
  showIcon: boolean;
  onChange: (value: {}) => void;
}

const Filter = ({
  icon,
  placeholder,
  width,
  hidden,
  name,
  showIcon,
  onChange,
}: FilterProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 768px)");

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    };

    // Check initial window size and add listener for changes
    setIsMobile(mediaQuery.matches);
    mediaQuery.addEventListener("change", handleResize);

    // Cleanup listener on unmount
    return () => {
      mediaQuery.removeEventListener("change", handleResize);
    };
  }, []);

  return (
    <div
      className={`${width} ${hidden} items-center md:flex md:basis-44 lg:m-8`}
    >
      <Image
        src={icon}
        className={`${
          showIcon === true ? "block" : "hidden"
        } mr-2 mt-1 md:inline `}
        width={20}
        height={20}
        alt="search icon"
      />

      <input
        type="text"
        name={name}
        placeholder={isMobile ? placeholder.sm : placeholder.lg}
        onChange={(e) => onChange({ [e.target.name]: e.target.value })}
        className="ml-2 min-w-full overflow-hidden rounded-md outline-0 hover:outline-0"
      />
    </div>
  );
};

export default Filter;
