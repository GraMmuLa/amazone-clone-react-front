import IEntity from "./IEntity";

export default interface IProductCard extends IEntity {
    price: number,
    fromWho: string,
    message?: string,
    email: string,
    productCardDesignId: number,
    code?: string
}