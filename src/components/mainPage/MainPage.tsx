import promNightBanner from "../../imgs/promNightBanner.jpg"
import SubcategoryList from "../subcategories/SubcategoryList";
import classes from "./MainPage.module.css"
import { Wrapper } from "../layout/wrapper/Wrapper";
import OtherDiscounts from "./discounts/otherDiscounts/OtherDiscounts";
import DayDiscount from "./discounts/dayDiscount/DayDiscount";
import React, { useEffect } from "react";
import { subcategoryAPI } from "../../redux/api/subcategoryAPI";
import { discountTypeAPI } from "../../redux/api/discountTypeAPI";
import { Discounts } from "../../enums/discounts";
import Preloader from "../preloader/Preloader";
import Recomendations from "./recomendations/Recomendations";

const MainPage: React.FunctionComponent = () => {
    const [fetchSubcategories, { data: subcategories, isLoading: isLoadingSubcategories }] = subcategoryAPI.useLazyFetchAllQuery();
    const [fetchDiscountTypes, { data: discountTypes, isLoading: isLoadingDiscountTypes }] = discountTypeAPI.useLazyFetchExceptDiscountTypeNameQuery();

    useEffect(() => {
        fetchDiscountTypes(Discounts.dayDiscount);
        fetchSubcategories();
    }, []);

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
                        <Recomendations/>
                    </Wrapper>
                </main>
            }
        </>
    );
}

export default MainPage;