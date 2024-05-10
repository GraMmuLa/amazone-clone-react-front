import IEntity from "./IEntity";

export default interface ICategory extends IEntity {
    name: string,
    subcategoriesIds?: number[],
    categoryImageId?: number
}