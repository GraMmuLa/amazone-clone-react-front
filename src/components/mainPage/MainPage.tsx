import Header from "../header/Header";
import Footer from "../footer/Footer";
import promNightBanner from "../../imgs/promNightBanner.jpg"
import SubcategoryList from "../subcategories/SubcategoryList";
import classes from "./MainPage.module.css"
import { Wrapper } from "../wrapper/Wrapper";
import OtherDiscounts from "./discounts/otherDiscounts/OtherDiscounts";
import DayDiscount from "./discounts/dayDiscount/DayDiscount";

const MainPage = () => {
    return (
        <>
            <Wrapper>
                <Header />
            </Wrapper>
            <img className={classes.promNightBanner} src={promNightBanner} alt="Prom Night" />
            <Wrapper>
                <SubcategoryList />
                <DayDiscount />
                <OtherDiscounts/>
            </Wrapper>
            <Footer />
        </>
    );
}

export default MainPage;