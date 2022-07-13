import { Order } from 'src/order/entities/order.entity';
import { Product } from 'src/product/entities/product.entity';

export class User {
  id?: string;
  email: string;
  user_name: string;
  password: string;
  image: string;
  is_admin: boolean;
  orders?: Partial<Order>[];
  favorite_products?: Partial<Product>[];
  created_at?: Date;
  updated_at?: Date;
}
