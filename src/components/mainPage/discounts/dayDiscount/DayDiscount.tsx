import React, {useEffect, useState} from "react";
import classes from "./DayDiscount.module.css"
import DayDiscountList from "./DayDiscountList";
import {productAPI} from "../../../../redux/api/productAPI";
import {Discounts} from "../../../../enums/discounts";

const DayDiscount: React.FunctionComponent = () => {
    const tomorrow = new Date();
    tomorrow.setHours(0,0,0,0);

    const [sub, setSub] = useState<Date>(new Date(tomorrow.getTime() - new Date().getTime()));

    const {data: products, isLoading} = productAPI.useFetchAllByDiscountTypeNameQuery(Discounts.dayDiscount);

    useEffect(() => {
        const interval = setInterval(() => {
            setSub(new Date(tomorrow.getTime() - new Date().getTime()));
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className={classes.dayDiscount}>
            <div className={classes.dayDiscount__top}>
                <h2 className={classes.dayDiscount__title}>Розпродаж Дня</h2>
                <div className={classes.timer}>
                    <h4 className={classes.timer__header}>Закінчиться через</h4>
                    <p className={classes.timer__time}>{sub.toLocaleTimeString()}</p>
                </div>
            </div>
            { isLoading ?
                <div>Loading...</div> :
                products && <DayDiscountList dayDiscounts={products}/>
            }
        </div>
    );
}

export default DayDiscount;