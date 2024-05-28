import IEntity from "./IEntity";

export default interface IReviewImage extends IEntity {
    data: File,
    reviewId: number
}