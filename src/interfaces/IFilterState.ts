export default interface IFilterState {
    page?: number;
    quantity?: number;
    priceFrom?: number,
    priceTo?: number,
    sortBy?: string,
    productTypeIds?: number[],
    discountPercentFrom?: number
}