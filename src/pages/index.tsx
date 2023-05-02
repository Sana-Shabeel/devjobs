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
  const [showMoreBtn, setShowMoreBtn] = useState("");

  useEffect(() => {
    const firstTenJobs: Job[] = data?.slice(0, 9);
    setJobData(firstTenJobs);
  }, [data]);

  const filterData = (filter: FilterType) => {
    const filteredData = data?.filter((job: Job) => {
      // check if the job is fulltime
      if (filter.fulltime) {
        if (job.position.toLowerCase().includes(filter.title.toLowerCase())) {
          if (
            job.location.toLowerCase().includes(filter.location.toLowerCase())
          ) {
            return job.contract === "Full Time";
          }
        }
      } else {
        // check if the job title matches the filter title
        if (job.position.toLowerCase().includes(filter.title.toLowerCase())) {
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

  const showMore = () => {
    setJobData(data as Job[]);
    setShowMoreBtn("hidden");
  };

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
      <div className="mt-4 grid place-items-center">
        <button
          type="button"
          className={`rounded-md border border-transparent bg-blue-500 px-12 py-3 text-center text-sm font-medium text-white  focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 ${showMoreBtn}`}
          onClick={showMore}
        >
          Load More
        </button>
      </div>
    </main>
  );
}
