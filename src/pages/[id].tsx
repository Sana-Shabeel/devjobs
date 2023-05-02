import { useEffect, useState } from "react";
import DetailFooter from "@/components/DetailFooter";
import DetailNavbar from "@/components/DetailNavbar";
import Header from "@/components/Header";
import JobDetail from "@/components/JobDetail";
import LoadingSpinner from "@/components/LoadingSpinner";
import ApplyModal from "@/components/Modal/ApplyModal";
import { useFetch } from "@/hooks/useFetch";
import { Kumbh_Sans } from "next/font/google";
import { useRouter } from "next/router";
import { Job } from "@/Types/model";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export default function Detail() {
  const router = useRouter();
  const id = parseInt(router.query.id as string);
  const [isOpen, setIsOpen] = useState(false);
  const [jobData, setJobData] = useState<Job>();

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  console.log(id);

  const { data, isLoading } = useFetch();

  useEffect(() => {
    setJobData(data?.find((job: Job) => job.id === Number(id)) as Job);
  }, [data, id]);

  // const job: Job | undefined = data.find((job: Job) => job.id === Number(id));

  return (
    <main className={`${kumbh.className} `}>
      {isOpen && (
        <ApplyModal closeModal={closeModal} isOpen={isOpen} job={jobData} />
      )}
      <Header />

      {isLoading ? (
        <div className="flex h-screen flex-col items-center justify-center ">
          <LoadingSpinner color="#9DAEC1" size="h-12 w-12" />
          <p>Loading, please wait...</p>
        </div>
      ) : (
        <>
          <DetailNavbar job={jobData} />
          <JobDetail openModal={openModal} job={jobData} />
          <DetailFooter
            openModal={openModal}
            title={jobData?.position}
            applications={jobData?.applications}
          />
        </>
      )}
    </main>
  );
}
