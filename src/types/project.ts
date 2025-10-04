import { Status } from "./status";
import { Technology } from "./technology";

export interface Project {
  id: string;
  logoUrl?: string;
  name: string;
  status: Status;
  description: string;
  techStack: Technology[];
  projectUrl?: string;
}
