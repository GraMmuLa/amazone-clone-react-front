import promNightBanner from "../../imgs/promNightBanner.jpg"
import SubcategoryList from "../subcategories/SubcategoryList";
import classes from "./MainPage.module.css"
import { Wrapper } from "../layout/wrapper/Wrapper";
import OtherDiscounts from "./discounts/otherDiscounts/OtherDiscounts";
import DayDiscount from "./discounts/dayDiscount/DayDiscount";
import React from "react";
import { subcategoryAPI } from "../../redux/api/subcategoryAPI";
import { discountTypeAPI } from "../../redux/api/discountTypeAPI";
import { Discounts } from "../../enums/discounts";
import Preloader from "../preloader/Preloader";
import Recommendations from "./recomendations/Recommendations";

const MainPage: React.FunctionComponent = () => {
    const { data: subcategories, isLoading: isLoadingSubcategories } = subcategoryAPI.useFetchAllQuery();
    const { data: discountTypes, isLoading: isLoadingDiscountTypes } = discountTypeAPI.useFetchExceptDiscountTypeNameQuery(Discounts.dayDiscount);

    return (
        <>
            {isLoadingSubcategories || isLoadingDiscountTypes ?
                <Preloader/> :
                <main>
                    <img className={classes.promNightBanner} src={promNightBanner} alt="Prom Night"/>
                    <Wrapper>
                        {subcategories && <SubcategoryList subcategories={subcategories}/>}
                        <DayDiscount/>
                        {discountTypes && <OtherDiscounts discountTypes={discountTypes}/>}
                        <Recommendations/>
                    </Wrapper>
                </main>
            }
        </>
    );
}

export default MainPage;