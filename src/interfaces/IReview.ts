import IEntity from "./IEntity";

export default interface IReview extends IEntity {
    mark: number,
    reviewText?: string,
    productId: number,
    userId: number,
    productReviewImageIds?: number[]
}