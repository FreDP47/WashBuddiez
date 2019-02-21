export interface Response {
    error: boolean;
    message: string;
    status: number;
    data: any;
  }

export class User {
    userId: string;
  }