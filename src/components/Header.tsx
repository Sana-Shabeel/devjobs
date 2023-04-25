import React from "react";
import Image from "next/image";
import SwitchToggle from "./SwitchToggle";

const Header = () => {
  return (
    <header className="h-[136px] bg-hero-pattern-mobile bg-cover bg-no-repeat md:bg-hero-pattern-tablet lg:bg-hero-pattern">
      <nav className="mx-auto flex w-327 items-center justify-between pt-8 md:w-689 lg:w-1110">
        <Image
          src="/assets/desktop/logo.svg"
          width="115"
          height="32"
          alt="sun icon"
        />
        <div className="flex items-center justify-between gap-2">
          <Image
            src="/assets/desktop/icon-sun.svg"
            width="24"
            height="24"
            alt="sun icon"
          />
          <SwitchToggle />
          <Image
            src="/assets/desktop/icon-moon.svg"
            width="24"
            height="24"
            alt="moon icon"
          />
        </div>
      </nav>
    </header>
  );
};

export default Header;
