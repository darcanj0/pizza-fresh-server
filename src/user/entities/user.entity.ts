import { Order } from "src/order/entities/order.entity";

export class User {
  id?: string;
  email: string;
  user_name: string;
  password: string;
  image: string;
  orders?: Partial<Order>
  created_at?: Date;
  updated_at?: Date;
}
