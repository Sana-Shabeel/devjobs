import DetailNavbar from "@/components/DetailNavbar";
import Header from "@/components/Header";
import JobDetail from "@/components/JobDetail";
import { useRouter } from "next/router";
import { Kumbh_Sans } from "next/font/google";
import { Job } from "@/Types/job";
import data from "../../data/data.json";
import DetailFooter from "@/components/DetailFooter";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export default function detail() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const router = useRouter();
  const id = router.query.id?.slice(-1);

  const job: Job | undefined = data.find((job) => job.id === Number(id));

  return (
    <main className={`${kumbh.className} `}>
      <Header />
      <DetailNavbar job={job} />

      <JobDetail job={job} />
      <DetailFooter title={job?.position} />
    </main>
  );
}
