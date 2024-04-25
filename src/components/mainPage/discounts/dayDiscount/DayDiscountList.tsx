import React from "react";
import classes from "./DayDiscountList.module.css";
import IProduct from "../../../../interfaces/IProduct";
import DayDiscountItem from "./DayDiscountItem";

const DayDiscountList: React.FunctionComponent<{dayDiscounts: IProduct[]}> = ({dayDiscounts}) => {
    return (
        <div className={classes.dayDiscountList}>
            {dayDiscounts.map(dayDiscount=> <DayDiscountItem key={dayDiscount.id} dayDiscount={dayDiscount}/>)}
        </div>
    );
}

export default DayDiscountList;