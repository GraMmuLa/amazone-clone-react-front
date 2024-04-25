import Header from "../header/Header";
import promNightBanner from "../../imgs/promNightBanner.jpg"
import SubcategoryList from "../subcategories/SubcategoryList";
import classes from "./MainPage.module.css"
import DayDiscount from "./discounts/dayDiscount/DayDiscount";
import {Wrapper} from "../wrapper/Wrapper";
import OtherDiscounts from "./discounts/otherDiscounts/OtherDiscounts";

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <Header/>
            </Wrapper>
            <img className={classes.promNightBanner} src={promNightBanner} alt="Prom Night"/>
            <Wrapper>
                <SubcategoryList/>
                <DayDiscount/>
                <OtherDiscounts/>
            </Wrapper>
        </>
    );
}

export default MainPage;