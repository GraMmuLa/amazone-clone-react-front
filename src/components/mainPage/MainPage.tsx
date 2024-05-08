import promNightBanner from "../../imgs/promNightBanner.jpg"
import SubcategoryList from "../subcategories/SubcategoryList";
import classes from "./MainPage.module.css"
import { Wrapper } from "../layout/wrapper/Wrapper";
import OtherDiscounts from "./discounts/otherDiscounts/OtherDiscounts";
import DayDiscount from "./discounts/dayDiscount/DayDiscount";
import React from "react";

const MainPage: React.FunctionComponent = () => {
    return (
        <>
            <img className={classes.promNightBanner} src={promNightBanner} alt="Prom Night" />
            <Wrapper>
                <SubcategoryList />
                <DayDiscount />
                <OtherDiscounts/>
            </Wrapper>
        </>
    );
}

export default MainPage;