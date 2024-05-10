import IEntity from "./IEntity";

export default interface IProductReview extends IEntity {
    mark: number,
    username: string,
    reviewText: string,
    productId: number
}