export class CreateOrderDto {
    user_id: string;
    table_number: number;
    active: boolean;
    products: object[];
}
