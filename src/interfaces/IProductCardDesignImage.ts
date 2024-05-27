import IEntity from "./IEntity";

export default interface IProductCardDesignImage extends IEntity {
    data: File,
    productCardDesignId: number
}