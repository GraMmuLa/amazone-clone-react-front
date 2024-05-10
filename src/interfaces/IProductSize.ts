import IEntity from "./IEntity";

export default interface IProductSize extends IEntity {
    size: string,
    productColorIds?: number[]
}