import IEntity from "./IEntity";

export default interface IProductCardDesign extends IEntity{
    name: string,
    description: string,
    productCardDesignImageId?: number,
    productCardIds?: number[]
}