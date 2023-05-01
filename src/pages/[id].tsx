import DetailNavbar from "@/components/DetailNavbar";
import Header from "@/components/Header";
import JobDetail from "@/components/JobDetail";
import { useRouter } from "next/router";
import { Kumbh_Sans } from "next/font/google";
import { Job } from "@/Types/job";
import DetailFooter from "@/components/DetailFooter";
import { useQuery } from "react-query";
import { useFetch } from "@/hooks/useFetch";
import { useEffect, useState } from "react";
import ApplyModal from "@/components/Modal/ApplyModal";
import LoadingSpinner from "@/components/LoadingSpinner";

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
        <ApplyModal
          closeModal={closeModal}
          isOpen={isOpen}
          position={jobData?.position}
        />
      )}
      <Header />

      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <DetailNavbar job={jobData} />
          <JobDetail openModal={openModal} job={jobData} />
          <DetailFooter
            openModal={openModal}
            title={jobData?.position}
            company={jobData?.company}
          />
        </>
      )}
    </main>
  );
}
