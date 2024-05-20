import React from "react";
import IProduct from "../../../../interfaces/IProduct";
import classes from "./DayDiscountItem.module.css"
import {productColorImageAPI} from "../../../../redux/api/productColorImageAPI";
import {discountAPI} from "../../../../redux/api/discountAPI";
import {productColorAPI} from "../../../../redux/api/productColorAPI";
import IProductColor from "../../../../interfaces/IProductColor";
import {NavLink} from "react-router-dom";

const DayDiscountItem: React.FunctionComponent<{dayDiscount: IProduct}> = ({dayDiscount}) => {

    const {data: productColor, isLoading} = productColorAPI.useFetchByIdQuery(dayDiscount.productColorsIds![0]);

    return (
        <>
            { isLoading ? <div>Loading...</div> :
                <div className={classes.dayDiscountItem}>
                    <div className={classes.dayDiscountItem__imgBlock}>
                        <Image productColor={productColor!}/>
                        <DiscountTag productColor={productColor!}/>
                    </div>
                    <DiscountBlock productColor={productColor!}/>
                </div>
            }
        </>
    );
}

const Image: React.FunctionComponent<{productColor: IProductColor}> = ({productColor}) => {
    const {data: productColorImage} = productColorImageAPI.useFetchByIdQuery(productColor.mainImageId!);

    return (
        <>
            {productColor.id && productColorImage && <NavLink to={`productPage/${productColor.id}`}><img src={'data:image/jpg;base64,' + productColorImage.data} alt="Product Image" className={classes.dayDiscountItem__img}/></NavLink> }
        </>
    );
}

const DiscountTag: React.FunctionComponent<{productColor: IProductColor}> = ({productColor}) => {

    const {data: discount} = discountAPI.useFetchByIdQuery(productColor.discountId!);

    const getDiscountPercent = () => {
        if(discount)
            return Math.round(discount.price / (productColor.price / 100));
    }

    return (
        <span className={classes.dayDiscountItem__discountTag}>{'-' + getDiscountPercent() + ' %'}</span>
    );
}

const DiscountBlock: React.FunctionComponent<{productColor: IProductColor}> = ({productColor}) => {
    const {data: discount} = discountAPI.useFetchByIdQuery(productColor.discountId!);

    return (
        <div className={classes.dayDiscountItem__discountBlock}>
            {discount &&
                <span
                    className={classes.dayDiscountItem__discount}>{productColor.price - discount.price + " грн"}</span>}
            <span className={classes.dayDiscountItem__fullPrice}>{productColor.price + ' грн'}</span>
        </div>
    );
}

export default DayDiscountItem;