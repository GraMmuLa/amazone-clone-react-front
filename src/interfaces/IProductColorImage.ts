import IEntity from "./IEntity";

export default interface IProductColorImage extends IEntity {
    data: File;
    productColorId: number;
}