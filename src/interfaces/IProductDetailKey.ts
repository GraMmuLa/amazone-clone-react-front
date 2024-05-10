import IEntity from "./IEntity";

export default interface IProductDetailKey extends IEntity {
    key: string,
    productTypeId: number
}