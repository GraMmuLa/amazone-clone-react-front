import IEntity from "./IEntity";

export default interface ISubcategoryImage extends IEntity {
    data: string,
    subcategoryId: number
}