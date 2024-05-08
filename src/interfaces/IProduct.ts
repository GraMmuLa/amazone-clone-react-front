export default interface IProduct {
    id?: number,
    name: string,
    description: string,
    productTypeId: number,
    mainImageId?: number,
    productColorsIds?: number[],
    productReviewsIds?: number[],
    productDetailValuesIds?: number[]
}