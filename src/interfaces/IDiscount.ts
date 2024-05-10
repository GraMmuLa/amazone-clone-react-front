import IEntity from "./IEntity";

export default interface IDiscount extends IEntity {
    period: number;
    price: number;
    discountTypeId: number;
    productColorId: number;
}