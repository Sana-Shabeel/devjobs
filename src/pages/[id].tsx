import DetailNavbar from "@/components/DetailNavbar";
import Header from "@/components/Header";
import JobDetail from "@/components/JobDetail";
import { useRouter } from "next/router";
import { Kumbh_Sans } from "next/font/google";
import { Job } from "@/Types/job";
import DetailFooter from "@/components/DetailFooter";
import { useQuery } from "react-query";
import { useFetch } from "@/hooks/useFetch";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export default function Detail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = parseInt(router.query.id as string);

  const { data } = useFetch(`/api/getJobs${id}`);

  const job: Job | undefined = data.find((job: Job) => job.id === Number(id));

  return (
    <main className={`${kumbh.className} `}>
      <Header />
      <DetailNavbar job={job} />

      <JobDetail job={job} />
      <DetailFooter title={job?.position} company={job?.company} />
    </main>
  );
}
