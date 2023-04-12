import Image from "next/image";
import { Kumbh_Sans } from "next/font/google";
import JobCard from "@/components/JobCard";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${kumbh.className} py-24`}>
      <section className="container md:w-689 lg:w-1110 border">
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
        <JobCard />
      </section>
    </main>
  );
}
