import styles from "./HeaderMenu.module.css";
import arrowImg from "../../../imgs/arrow.svg"
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {useAppSelector} from "../../../redux/hooks/useAppSelector";

const HeaderMenu: React.FunctionComponent = () => {
    const handleClick = () => {
        document.body.classList.toggle("userOpen")
    }

    const {isLogged} = useAppSelector((state)=>state.user);

    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li id="userOpen" onClick={handleClick} className={styles.menu__item}>
                    <button className={styles.menu__link}>Всі<span><img src={arrowImg} alt="arrow" /></span></button>
                </li>
                <li className={styles.menu__item}><NavLink to="/todaysOffers" className={styles.menu__link}>Сьогоднішні пропозиції</NavLink></li>
                <li className={styles.menu__item}><NavLink to="/orders/1" className={styles.menu__link}>Купити знову</NavLink></li>
                <li className={styles.menu__item}><a href="" className={styles.menu__link}>Обслуговування клієнтів</a></li>
                <li className={styles.menu__item}><a href="" className={styles.menu__link}>Подарункові карти</a></li>
                {!isLogged && <li className={styles.menu__item}><NavLink to="/becomeSeller" className={styles.menu__link}>Продати</NavLink></li>}
            </ul>
        </nav>
    );
}

export default HeaderMenu;