import { User } from "src/user/entities/user.entity";
import { OrderProducts } from "./order-products.entity";

export class Order {
    id?: number;
    user_id?: string;
    table_number: number;
    active: boolean;
    user?: Partial<User>
    products?: OrderProducts[]
    created_at?: Date; 
}
