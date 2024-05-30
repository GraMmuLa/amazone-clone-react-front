import styles from "./HeaderBasket.module.css";
import headerBasketImg from "../../../../imgs/header/basket.svg"
import React from "react";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector";
import {NavLink} from "react-router-dom";
import HeaderBasketItem from "./HeaderBasketItem";

const HeaderBasket: React.FunctionComponent = () => {

    const {favouriteProductColorIds} = useAppSelector(state=>state.user);

    return (
        <div className={styles.header__basketWrapper}>
            <a href="#" className={styles.header__basketBlock}>
                <img src={headerBasketImg} alt="basket" />
                {favouriteProductColorIds && <div className={styles.header__value}>{favouriteProductColorIds.length}</div> }
            </a>
            <div className={styles.basketBody}>

                {favouriteProductColorIds &&
                    <>
                        <div className={styles.basketBody__count}>Ваші
                            товари: <span>{favouriteProductColorIds.length}</span></div>
                        <div className={styles.basketBody__items}>
                            {favouriteProductColorIds.map(productColorId => (
                                <HeaderBasketItem key={productColorId} productColorId={productColorId}/>))}
                        </div>
                        <NavLink to="/basket" className={styles.basketBody__link}>Перейти до корзини</NavLink>
                    </>
                }
            </div>
        </div>
    );
}

export default HeaderBasket;