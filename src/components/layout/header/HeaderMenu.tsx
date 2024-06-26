import styles from "./HeaderMenu.module.css";
import arrowImg from "../../../imgs/arrow.svg"
import React from "react";
import { NavLink } from "react-router-dom";
import {useAppSelector} from "../../../redux/hooks/useAppSelector";

const HeaderMenu: React.FunctionComponent = () => {
    document.addEventListener('click', (e) => {
        const target = e.target as HTMLElement;
        if (!target.closest("#user")) {
            if (!target.closest("#userOpen")) {
                document.body.classList.remove("userOpen")
            }
        }
    })
    const handleClick = () => {
        document.body.classList.toggle("userOpen")
    }

    const {isLogged} = useAppSelector((state)=>state.user);

    return (
        <nav className={styles.menu}>
            <ul className={styles.menu__list}>
                <li className={styles.menu__item}>
                    <button id="userOpen" onClick={handleClick} className={styles.menu__link}>Всі<span><img src={arrowImg} alt="arrow" /></span></button>
                </li>
                <li className={styles.menu__item}><NavLink to="/todaysOffers" className={styles.menu__link}>Сьогоднішні пропозиції</NavLink></li>
                <li className={styles.menu__item}><NavLink to="/orders/1" className={styles.menu__link}>Купити знову</NavLink></li>
                <li className={styles.menu__item}><NavLink to="/customerService" className={styles.menu__link}>Обслуговування клієнтів</NavLink></li>
                <li className={styles.menu__item}><NavLink to="/giftCards" className={styles.menu__link}>Подарункові карти</NavLink></li>
                {!isLogged && <li className={styles.menu__item}><NavLink to="/becomeSeller" className={styles.menu__link}>Продати</NavLink></li>}
            </ul>
        </nav>
    );
}

export default HeaderMenu;