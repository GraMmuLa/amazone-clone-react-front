import IEntity from "./IEntity";

export default interface IProductColorImage extends IEntity {
    data: string;
    productColorId: number;
}