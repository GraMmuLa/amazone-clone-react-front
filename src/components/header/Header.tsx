import HeaderSearch from "./HeaderSearch";
import HeaderBasket from "./headerBasket/HeaderBasket";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
    return (
        <header className="header">
            <div className="header__container">
                <div className="header__top">
                    <a href="" className="header__logo"><img src="img/logo.svg" alt="logo"/></a>
                    <HeaderSearch/>
                    <HeaderBasket/>
                </div>
                <HeaderMenu/>
            </div>
        </header>
    );
}

export default Header;