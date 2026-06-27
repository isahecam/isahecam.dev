export interface Period {
  startDate: string;
  endDate: string | null;
}

export interface Company {
  name: string;
  website: string | null;
  logo: string | null;
}

export interface Experience {
  _id: string;
  role: string;
  company: Company;
  period: Period;
  description: string;
}
