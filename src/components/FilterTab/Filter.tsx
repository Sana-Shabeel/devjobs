import Image from "next/image";
interface FilterProps {
  icon: string;
  placeholder: string;
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
  return (
    <div className={`${width} ${hidden} items-center md:flex`}>
      <Image
        src={icon}
        className={`${
          showIcon === true ? "block" : "hidden"
        } mr-2 mt-1 md:inline `}
        width={20}
        height={20}
        alt="search icon"
      />

      <div className="overflow-hidden rounded-md bg-inherit outline-0 hover:outline-0">
        <input
          type="text"
          name={name}
          placeholder={placeholder}
          className=" bg-inherit outline-0 sm:w-full"
          onChange={(e) => onChange({ [e.target.name]: e.target.value })}
        />
      </div>
    </div>
  );
};

export default Filter;
