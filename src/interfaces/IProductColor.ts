
export default interface IProductColor {
    id?: number;
    colorId: number;
    productId: number;
    discountId?: number;
    productColorImageIds: number[],
    productSizeIds: number[],
    mainImageId: number
}