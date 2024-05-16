import IEntity from "./IEntity";

export default interface IColor extends IEntity {
    color: string,
    subcategoryId: number,
    productColorsIds?: number[]
}