export interface ApiResponse {
  totalCount: number;
  groupCount: number;
  summary: string[];
  data: Employee[];
}

export interface Employee {
  id: string;
  firstName: string;
  lastName: string;
  title: string;
  position: string;
  birthDate: string;
  hireDate: string;
  notes: string;
  address: string;
  countryCode: string;


}

