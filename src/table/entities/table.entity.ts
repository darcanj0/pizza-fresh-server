import { Order } from "src/order/entities/order.entity";

export class Table {
  id?: string;
  number: number;
  orders?: Partial<Order> 
  created_at?: Date;
  updated_at?: Date;
}
