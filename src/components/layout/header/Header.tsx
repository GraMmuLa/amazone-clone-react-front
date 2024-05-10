import HeaderSearch from "./HeaderSearch";
import HeaderBasket from "./headerBasket/HeaderBasket";
import User from "./user/User";
import HeaderMenu from "./HeaderMenu";
import styles from "./Header.module.css";
import image from "../../../logo.svg";
import { NavLink } from "react-router-dom";
import React from "react";
import {userSlice} from "../../../redux/slices/userSlice";
import {useAppSelector} from "../../../redux/hooks/useAppSelector";

const Header: React.FunctionComponent = () => {

    const {isLogged} = useAppSelector(state=>state.user);

    return (
        <header className={styles.header}>
            <div className={`${styles.header__container} __containerMax`}>
                <div className={styles.header__top}>
                    <div>
                        <NavLink to="/" className={styles.header__logo}><img src={image} alt="logo" /></NavLink>
                    </div>
                    <HeaderSearch />
                    {isLogged && <HeaderBasket />}
                </div>
                <HeaderMenu />
                <User />
            </div>
        </header>
    );
}

export default Header;