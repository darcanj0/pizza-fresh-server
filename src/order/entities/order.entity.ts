import { User } from "src/user/entities/user.entity";

export class Order {
    id?: number;
    user_id: string;
    table_number: number;
    active: boolean;
    user?: Partial<User>
    created_at?: Date; 
}
