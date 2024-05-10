import IEntity from "./IEntity";

export default interface ICategoryImage extends IEntity {
    data: File,
    categoryId: number
}