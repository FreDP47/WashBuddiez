export interface Response {
  error: boolean;
  message: string;
  status: number;
  data: any;
}

export class User {
  userid: string;
  userName: string;
  emailId: string;
  provider: string;
}

export class Address {
  flatNo: string;
  road: string;
  locality: string;
  landmark: string;
  city: string;
  state: string;
  pincode: number;
  phoneNo: number;
  time: Date;
}

export class OrderDetails {
  apparel: string;
  quantity: number;
}

export class Order {
  user: User;
  address: Address;
  details: OrderDetails[];
}
