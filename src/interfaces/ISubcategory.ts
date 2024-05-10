import IEntity from "./IEntity";

export default interface ISubcategory extends IEntity {
    name: string,
    categoryId: number,
    subcategoryImageId?: number,
    productTypeIds?: number[]
}