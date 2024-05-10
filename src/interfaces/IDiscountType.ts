import IEntity from "./IEntity";

export default interface IDiscountType extends IEntity {
    type: string;
    discountIds?: number[];
}