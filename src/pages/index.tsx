import Image from "next/image";
import { Kumbh_Sans } from "next/font/google";
import JobCard from "@/components/JobCard";
import data from "../../data/data.json";
import Button from "@/components/Button";
import FilterTab from "@/components/FilterTab/FilterTab";
import MyModal from "@/components/Modal/FilterModal";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main
      className={`${kumbh.className} mx-auto overflow-hidden border bg-lightGray py-6  md:w-689 lg:w-1110`}
    >
      <FilterTab />

      {/* <section className="container">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section> */}
    </main>
  );
}
