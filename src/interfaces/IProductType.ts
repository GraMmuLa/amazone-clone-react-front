import IEntity from "./IEntity";

export default interface IProductType extends IEntity {
    name: string,
    subcategoryId: number,
    productIds?: number[]
}