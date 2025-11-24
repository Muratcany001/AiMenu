import { CreateOrderitemDto } from "../order-item-dtos/create-order-item-dto";

export interface CreateOrderDto{
    OrderId : number;
    TableNumber : string;
    Notes: string;
    OrderItems: CreateOrderitemDto[];
}