import IEntity from "./IEntity";

export default interface IProduct extends IEntity {
    name: string,
    description: string,
    productTypeId: number,
    productColorsIds?: number[],
    productReviewsIds?: number[],
    productDetailValuesIds?: number[]
}