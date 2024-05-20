import promNightBanner from "../../imgs/promNightBanner.jpg"
import SubcategoryList from "../subcategories/SubcategoryList";
import classes from "./MainPage.module.css"
import { Wrapper } from "../layout/wrapper/Wrapper";
import OtherDiscounts from "./discounts/otherDiscounts/OtherDiscounts";
import DayDiscount from "./discounts/dayDiscount/DayDiscount";
import Recomendations from "./recomendations/Recomendations";
import React, { useEffect, useState } from "react";
import { subcategoryAPI } from "../../redux/api/subcategoryAPI";
import { discountTypeAPI } from "../../redux/api/discountTypeAPI";
import { Discounts } from "../../enums/discounts";
import Preloader from "../preloader/Preloader";

const MainPage: React.FunctionComponent = () => {
    const { data: subcategories, isLoading: isLoadingSubcategories } = subcategoryAPI.useFetchAllQuery();
    const { data: discountTypes, isLoading: isLoadingDiscountTypes } = discountTypeAPI.useFetchExceptDiscountTypeNameQuery(Discounts.dayDiscount);

    useEffect(() => {
        const preloader = document.querySelector('.preloader');
        if (isLoadingSubcategories || isLoadingDiscountTypes) {
            preloader?.classList.add("_active");
        } else {
            preloader?.classList.remove("_active");
        }
    }, [isLoadingSubcategories, isLoadingDiscountTypes]);

    return (
        <>
            <Preloader />
            <img className={classes.promNightBanner} src={promNightBanner} alt="Prom Night" />
            <Wrapper>
                {subcategories && <SubcategoryList subcategories={subcategories} />}
                <DayDiscount />
                {discountTypes && <OtherDiscounts discountTypes={discountTypes} />}
                <Recomendations />
            </Wrapper>
        </>
    );
}

export default MainPage;