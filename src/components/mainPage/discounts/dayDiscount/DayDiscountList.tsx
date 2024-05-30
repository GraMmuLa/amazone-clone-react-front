import React from "react";
import classes from "./DayDiscountList.module.css";
import IProduct from "../../../../interfaces/IProduct";
import DayDiscountItem from "./DayDiscountItem";
import IProductColor from "../../../../interfaces/IProductColor";

const DayDiscountList: React.FunctionComponent<{dayDiscounts: IProductColor[]}> = ({dayDiscounts}) => {
    return (
        <div className={classes.dayDiscountList}>
            {dayDiscounts.map(dayDiscount=> <DayDiscountItem key={dayDiscount.id} dayDiscount={dayDiscount}/>)}
        </div>
    );
}

export default DayDiscountList;