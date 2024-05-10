import IEntity from "./IEntity";

export default interface IProductDetailValue extends IEntity {
   value: string,
   productDetailKeyId: number,
   productId: number
}