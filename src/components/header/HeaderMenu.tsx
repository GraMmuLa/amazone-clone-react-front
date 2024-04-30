import styles from "./HeaderMenu.module.css";
import arrowImg from "../../imgs/arrow.svg"
import React from "react";
import {NavLink} from "react-router-dom";

const HeaderMenu = () => {
    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <a href="" className={styles.menu__link}>Всі<span><img src={arrowImg} alt="arrow" /></span></a>
                    <ul className={styles.menu__subList}>
                        <li className={styles.menu__subItem}>
                            <a href="" className={styles.menu__subLink}>lorem 1</a>
                        </li>
                        <li className={styles.menu__subItem}>
                            <a href="" className={styles.menu__subLink}>lorem 2</a>
                        </li>
                    </ul>
                </li>
                <li className={styles.menu__item}><NavLink to="/todaysOffers" className={styles.menu__link}>Сьогоднішні пропозиції</NavLink></li>
                <li className={styles.menu__item}><a href="" className={styles.menu__link}>Купити знову</a></li>
                <li className={styles.menu__item}><a href="" className={styles.menu__link}>Обслуговування клієнтів</a></li>
                <li className={styles.menu__item}><a href="" className={styles.menu__link}>Подарункові карти</a></li>
                <li className={styles.menu__item}><a href="" className={styles.menu__link}>Продати</a></li>
            </ul>
        </nav>
    );
}

export default HeaderMenu;