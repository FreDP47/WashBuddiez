export interface Response {
  error: boolean;
  message: string;
  status: number;
  data: any;
}

export class User {
  userid: string;
  userName: string;
  emailId :string;
  provider: string;
}