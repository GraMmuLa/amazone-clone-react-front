export default interface IProductColor {
    id: number;
    color: string;
    productId: number;
    discountId?: number;
    productColorImageIds: number[],
    mainImageId: number
}