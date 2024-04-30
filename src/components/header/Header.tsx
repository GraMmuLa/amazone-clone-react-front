import HeaderSearch from "./HeaderSearch";
import HeaderBasket from "./headerBasket/HeaderBasket";
import HeaderMenu from "./HeaderMenu";
import styles from "./Header.module.css";
import image from "../../logo.svg";
import {NavLink} from "react-router-dom";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.header__container}>
                <div className={styles.header__top}>
                    <div>
                        <NavLink to="/" className={styles.header__logo}><img src={image} alt="logo" /></NavLink>
                    </div>
                    <HeaderSearch />
                    <HeaderBasket />
                </div>
                <HeaderMenu />
            </div>
        </header>
    );
}

export default Header;