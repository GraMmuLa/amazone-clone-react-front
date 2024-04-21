import React from "react";
import IProduct from "../../../interfaces/IProduct";
import classes from "./DayDiscountItem.module.css"
import {productColorImageAPI} from "../../../redux/api/productColorImageAPI";
import {discountAPI} from "../../../redux/api/discountAPI";
import {productColorAPI} from "../../../redux/api/productColorAPI";
import IProductColor from "../../../interfaces/IProductColor";

const DayDiscountItem: React.FunctionComponent<{dayDiscount: IProduct}> = ({dayDiscount}) => {

    const {data: productColor, isLoading} = productColorAPI.useFetchProductColorQuery(dayDiscount.productColorsIds[0]);

    if(isLoading)
        return <div>Loading...</div>

    return (
        <div className={classes.dayDiscountItem}>
            <div className={classes.dayDiscountItem__imgBlock}>
                <DayDiscountItemImage productColor={productColor!}/>
                <DayDiscountTag dayDiscount={dayDiscount} productColor={productColor!}/>
            </div>
            <DiscountBlock dayDiscount={dayDiscount} productColor={productColor!}/>
        </div>
    );
}

const DayDiscountItemImage: React.FunctionComponent<{productColor: IProductColor}> = ({productColor}) => {
    const {data: productColorImage} = productColorImageAPI.useFetchProductColorImageQuery(productColor.mainImageId);

    return (
        <>
            {productColorImage && <img src={'data:image/jpg;base64,' + productColorImage.data} alt="Product Image" className={classes.dayDiscountItem__img}/> }
        </>
    );
}

const DayDiscountTag: React.FunctionComponent<{dayDiscount: IProduct, productColor: IProductColor}> = ({dayDiscount, productColor}) => {

    const {data: discount} = discountAPI.useFetchDiscountQuery(productColor.discountId!);

    const getDiscountPercent = () => {
        if(discount)
            return Math.round(discount.price / (dayDiscount.price / 100));
    }

    return (
        <span className={classes.dayDiscountItem__discountTag}>{'-' + getDiscountPercent() + ' %'}</span>
    );
}

const DiscountBlock: React.FunctionComponent<{dayDiscount: IProduct, productColor: IProductColor}> = ({dayDiscount, productColor}) => {
    const {data: discount} = discountAPI.useFetchDiscountQuery(productColor.discountId!);

    return (
        <div>
            {discount &&
                <span
                    className={classes.dayDiscountItem__discount}>{dayDiscount.price - discount.price + " грн"}</span>}
            <span className={classes.dayDiscountItem__fullPrice}>{dayDiscount.price + ' грн'}</span>
        </div>
    );
}

export default DayDiscountItem;