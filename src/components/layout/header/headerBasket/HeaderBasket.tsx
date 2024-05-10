import HeaderBasketList from "./HeaderBasketList";
import styles from "./HeaderBasket.module.css";
import headerBasketImg from "../../../../imgs/header/basket.svg"
import React from "react";
import IProduct from "../../../../interfaces/IProduct";
import {productAPI} from "../../../../redux/api/productAPI";
import {useSelector} from "react-redux";
import {useAppSelector} from "../../../../redux/hooks/useAppSelector";

const HeaderBasket: React.FunctionComponent = () => {

    const {favouriteProductColorIds} = useAppSelector(state=>state.user);

    return (
        <div className={styles.header__basketWrapper}>
            <a href="" className={styles.header__basketBlock}>
                <img src={headerBasketImg} alt="basket" />
                {favouriteProductColorIds && <div className={styles.header__value}>{favouriteProductColorIds.length}</div> }
            </a>
            <div className={styles.basketBody}>

                {favouriteProductColorIds &&
                    <>
                        <div className={styles.basketBody__count}>Ваші товари: <span>{favouriteProductColorIds.length}</span></div>
                        <HeaderBasketList productColorIds={favouriteProductColorIds}/>
                    </>
                }
            </div>
        </div>
    );
}

export default HeaderBasket;