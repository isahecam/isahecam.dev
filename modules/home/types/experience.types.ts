export interface Period {
  startDate: string;
  endDate: string | null;
}

export interface Company {
  name: string;
  website: string;
  logo: string;
}

export interface Experience {
  id: number;
  role: string;
  company: Company;
  period: Period;
  description: string;
}
