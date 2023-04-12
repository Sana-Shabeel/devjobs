import Image from "next/image";
import { Kumbh_Sans } from "next/font/google";
import JobCard from "@/components/JobCard";
import data from "../../data/data.json";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${kumbh.className} py-24`}>
      <section className="container md:w-689 lg:w-1110 ">
        {data.map((job) => (
          <JobCard key={job.id} job={job} />
        ))}
      </section>
    </main>
  );
}
