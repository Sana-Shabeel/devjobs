import React from "react";
import Image from "next/image";
import SwitchToggle from "./SwitchToggle";

const Header = () => {
  return (
    <header className="h-[140px] bg-hero-pattern-mobile bg-cover bg-no-repeat md:bg-hero-pattern-tablet lg:h-[10rem] lg:bg-hero-pattern 2xl:h-[15rem]">
      <nav className="mx-auto flex w-327 items-center justify-between pt-6 md:w-689 md:pt-12 xl:w-1110 2xl:pt-24">
        <Image
          src="/assets/desktop/logo.svg"
          width="115"
          height="32"
          alt="sun icon"
        />
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <Image
            src="/assets/desktop/icon-sun.svg"
            width="15"
            height="24"
            alt="sun icon"
          />
          <SwitchToggle />
          <Image
            src="/assets/desktop/icon-moon.svg"
            width="15"
            height="24"
            alt="moon icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
