import React from "react";
import IProduct from "../../../../interfaces/IProduct";
import { productColorAPI } from "../../../../redux/api/productColorAPI";
import classes from "./OtherDiscounts.module.css";
import IProductColor from "../../../../interfaces/IProductColor";
import { productColorImageAPI } from "../../../../redux/api/productColorImageAPI";
import { discountAPI } from "../../../../redux/api/discountAPI";
import { NavLink } from "react-router-dom";

const OtherDiscountsItem: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {

    const { data: productColor, isLoading } = productColorAPI.useFetchByIdQuery(product.productColorsIds![0]);

    return (
        <>
            {isLoading ? <div>Loading...</div> :
                <div className={classes.dayDiscountItem}>
                    <div className={classes.discount__imgBlock}>
                        <Image productColor={productColor!} />
                    </div>
                    <DiscountBlock productColor={productColor!} />
                </div>
            }
        </>
    );
}

const Image: React.FunctionComponent<{ productColor: IProductColor }> = ({ productColor }) => {
    const { data: productColorImage } = productColorImageAPI.useFetchByIdQuery(productColor.mainImageId!);

    return (
        <>
            {productColorImage && productColor.id && <NavLink to={`/productPage/${productColor.id}`}><img src={'data:image/jpg;base64,' + productColorImage.data} alt="Product" className={classes.discount__img} /></NavLink>}
        </>
    );
}

const DiscountBlock: React.FunctionComponent<{ productColor: IProductColor }> = ({ productColor }) => {
    const { data: discount } = discountAPI.useFetchByIdQuery(productColor.discountId!);

    return (
        <div>
            {discount &&
                <span
                    className={classes.discount__discount}>{productColor.price - discount.price + " грн"}</span>}
        </div>
    );
}

export default OtherDiscountsItem;