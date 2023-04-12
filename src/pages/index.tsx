import Image from "next/image";
import { Kumbh_Sans } from "next/font/google";
import JobCard from "@/components/JobCard";

const kumbh = Kumbh_Sans({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${kumbh.className} py-24`}>
      <JobCard />
    </main>
  );
}
