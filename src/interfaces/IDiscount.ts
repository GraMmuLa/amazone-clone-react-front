export default interface IDiscount {
    id?: number,
    period: Date;
    price: number;
    discountTypeId: number;
    productColorId: number;
}