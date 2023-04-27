import React from "react";

interface Props {
  title: string;
  listStyle: string;
  content: string | undefined;
  items: string[] | undefined;
}

const JobRequirements = ({ items, content, title, listStyle }: Props) => {
  return (
    <div className="my-3 leading-loose">
      <h2 className="mb-4 text-xl font-bold text-inherit">{title}</h2>
      <p className="font-light text-darkGray">{content}</p>

      <div className="mt-4">
        {items?.map((item, index) => (
          <div
            key={index}
            className="flex items-start  font-light text-darkGray"
          >
            <div
              className={`${
                listStyle === "list-disc" ? "text-3xl" : "text-lg"
              } mr-3 font-bold text-violet`}
            >
              {listStyle === "list-disc" ? "•" : index + 1}
            </div>
            <div className="ml-3 ">{item}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobRequirements;
