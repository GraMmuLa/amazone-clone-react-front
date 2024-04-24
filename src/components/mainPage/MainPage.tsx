import Header from "../header/Header";
import Footer from "../footer/Footer";
import promNightBanner from "../../imgs/promNightBanner.jpg"
import SubcategoryList from "../subcategories/SubcategoryList";
import classes from "./MainPage.module.css"
import DayDiscount from "./dayDiscount/DayDiscount";
import { Wrapper } from "../wrapper/Wrapper";

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
            </Wrapper>
            <Footer />
        </>
    );
}

export default MainPage;