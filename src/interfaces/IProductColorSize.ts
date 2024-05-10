import IEntity from "./IEntity";

export default interface IProductColorSize extends IEntity {
    productColorId: number,
    productSizeId: number
}