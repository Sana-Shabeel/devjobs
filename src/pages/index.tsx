import Image from "next/image";
import { Kumbh_Sans } from "next/font/google";
import JobCard from "@/components/JobCard";
import data from "../../data/data.json";
import FilterTab from "@/components/FilterTab/FilterTab";
import MyModal from "@/components/Modal/FilterModal";
import { useState } from "react";
import Header from "@/components/Header";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export interface FilterType {
  fulltime: boolean;
  title: string;
  location: string;
}

export default function Home() {
  const [fetchedJobs, setFetchedJobs] = useState();
  const [jobData, setJobData] = useState(data);

  const fetchJobs = async () => {
    const res = await fetch("/api/getJobs");

    const newJobs = await res.json();
    setFetchedJobs(newJobs);
  };

  console.log(fetchedJobs);

  // create a finction that will filter the data
  const filterData = (filter: FilterType) => {
    // filter the data
    const filteredData = data.filter((job) => {
      // check if the job is fulltime
      if (filter.fulltime) {
        // check if the job title matches the filter title
        if (job.position.toLowerCase().includes(filter.title.toLowerCase())) {
          // check if the job location matches the filter location
          if (
            job.location.toLowerCase().includes(filter.location.toLowerCase())
          ) {
            return job.contract === "Full Time";
          }
        }
      } else {
        // check if the job title matches the filter title
        if (job.position.toLowerCase().includes(filter.title.toLowerCase())) {
          // check if the job location matches the filter location
          if (
            job.location.toLowerCase().includes(filter.location.toLowerCase())
          ) {
            return job;
          }
        }
      }
    });
    setJobData(filteredData);
  };

  return (
    <main className={`${kumbh.className} `}>
      <Header />

      <FilterTab filterData={filterData} />

      <button className="bg-violet px-12 py-3 text-white" onClick={fetchJobs}>
        Fetch
      </button>
      <div className="mx-auto mt-20 overflow-hidden md:w-689 xl:w-1110">
        <section className="container">
          {jobData.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </section>
      </div>
    </main>
  );
}
