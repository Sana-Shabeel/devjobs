import DetailNavbar from "@/components/DetailNavbar";
import Header from "@/components/Header";
import JobDetail from "@/components/JobDetail";
import { useRouter } from "next/router";
import { Kumbh_Sans } from "next/font/google";
import { Job } from "@/Types/job";
import DetailFooter from "@/components/DetailFooter";
import { useQuery } from "react-query";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export default function Detail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = router.query.id?.slice(-1);

  const { isLoading, error, data } = useQuery("jobs", () =>
    fetch("/api/getJobs").then((res) => res.json())
  );

  const job: Job | undefined = data.find((job: Job) => job.id === Number(id));

  return (
    <main className={`${kumbh.className} `}>
      <Header />
      <DetailNavbar job={job} />

      <JobDetail job={job} />
      <DetailFooter title={job?.position} />
    </main>
  );
}
