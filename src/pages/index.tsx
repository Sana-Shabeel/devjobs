import Image from "next/image";
import { Kumbh_Sans } from "next/font/google";
import JobCard from "@/components/JobCard";
import FilterTab from "@/components/FilterTab/FilterTab";
import MyModal from "@/components/Modal/FilterModal";
import { useEffect, useState } from "react";
import Header from "@/components/Header";
import { Job } from "@/Types/model";
import { useQuery } from "react-query";
import LoadingSpinner from "@/components/LoadingSpinner";
import { useFetch } from "@/hooks/useFetch";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export interface FilterType {
  fulltime: boolean;
  title: string;
  location: string;
}

export default function Home() {
  // const [fetchedJobs, setFetchedJobs] = useState<Job[]>();
  const [jobData, setJobData] = useState<Job[]>();

  const { isLoading, error, data } = useFetch();

  useEffect(() => {
    setJobData(data as Job[]);
  }, [data]);

  const filterData = (filter: FilterType) => {
    // filter the data
    const filteredData = data?.filter((job: Job) => {
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
    setJobData(filteredData as Job[]);
  };

  console.log(jobData);

  return (
    <main className={`${kumbh.className} `}>
      <Header />

      <FilterTab filterData={filterData} />

      {isLoading ? (
        <div className="flex h-screen flex-col items-center justify-center ">
          <LoadingSpinner color="#9DAEC1" size="h-12 w-12" />
          <p>Loading, please wait...</p>
        </div>
      ) : (
        <div className="mx-auto mt-20 overflow-hidden md:w-689 xl:w-1110">
          <section className="container">
            {jobData?.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </section>
        </div>
      )}
    </main>
  );
}
