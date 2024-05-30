import React from "react";
import IDiscountType from "../../../../interfaces/IDiscountType";
import { productAPI } from "../../../../redux/api/productAPI";
import OtherDiscountsItem from "./OtherDiscountsItem";
import classes from "./OtherDiscountsList.module.css";
import {productColorAPI} from "../../../../redux/api/productColorAPI";

const OtherDiscountsList: React.FunctionComponent<{ discountType: IDiscountType }> = ({ discountType }) => {

    const { data: productColors, isLoading } = productColorAPI.useFetchAllByDiscountTypeNameQuery({discountTypeName: discountType.type, quantity: 5});

    return (
        <>
            {isLoading ?
                <div>Loading...</div> :
                productColors && productColors.map(productColor => (
                    <div className={classes.otherDiscountsList}>
                        <OtherDiscountsItem productColor={productColor} />
                    </div>
                ))
            }
        </>
    );
}

export default OtherDiscountsList;