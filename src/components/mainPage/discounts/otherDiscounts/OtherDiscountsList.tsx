import React from "react";
import IDiscountType from "../../../../interfaces/IDiscountType";
import { productAPI } from "../../../../redux/api/productAPI";
import OtherDiscountsItem from "./OtherDiscountsItem";
import classes from "./OtherDiscountsList.module.css";

const OtherDiscountsList: React.FunctionComponent<{ discountType: IDiscountType }> = ({ discountType }) => {


    const { data: products, isLoading } = productAPI.useFetchAllByDiscountTypeNameQuery(discountType.type);

    return (
        <>
            {isLoading ?
                <div>Loading...</div> :
                products && products.map(product => (
                    <div className={classes.otherDiscountsList}>
                        <OtherDiscountsItem product={product} />
                    </div>
                ))
            }
        </>
    );
}

export default OtherDiscountsList;