import IEntity from "./IEntity";

export default interface IProductColor extends IEntity {
    price: number,
    colorId: number,
    productId: number,
    discountId?: number,
    productColorImageIds?: number[],
    productSizeIds?: number[],
    mainImageId?: number,
    favouritedUserIds?: number[]
}