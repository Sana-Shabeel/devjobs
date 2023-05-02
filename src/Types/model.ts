import { Application } from "@prisma/client";

export interface Job {
  id: number;
  company: string;
  logo: string;
  logoBackground: string;
  position: string;
  postedAt: string;
  contract: string;
  location: string;
  website: string;
  apply: string;
  description: string;
  requirementContent: string;
  requirementsItem: string[];
  roleContent: string;
  rolesItem: string[];
  applications: Application[];
}

export interface SentApplicationProps {
  onSuccess: boolean;
  onError: boolean;
}

export interface FormValues {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  job: Job;
  jobId: number;
}
