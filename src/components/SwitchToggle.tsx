import { useState } from "react";
import { Switch } from "@headlessui/react";
import { useTheme } from "next-themes";

export default function SwitchToggle() {
  const [enabled, setEnabled] = useState(false);
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Switch
        checked={enabled}
        onChange={() => {
          setEnabled(theme === "dark" ? false : true);
          setTheme(theme === "dark" ? "light" : "dark");
        }}
        className={`relative inline-flex
          h-[24px] w-[48px] shrink-0 cursor-pointer items-center rounded-full  border-2 border-transparent bg-white transition-colors duration-200 ease-in-out focus:outline-none  focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? "translate-x-7" : "translate-x-0"}
            pointer-events-none inline-block h-[15px] w-[15px] transform rounded-full bg-violet shadow-lg ring-0 transition duration-200 ease-in-out`}
        />
      </Switch>
    </div>
  );
}
