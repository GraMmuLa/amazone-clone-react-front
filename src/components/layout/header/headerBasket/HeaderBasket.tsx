import HeaderBasketList from "./HeaderBasketList";
import styles from "./HeaderBasket.module.css";
import headerBasketImg from "../../../../imgs/header/basket.svg"
import React from "react";
import IProduct from "../../../../interfaces/IProduct";
import {productAPI} from "../../../../redux/api/productAPI";

const HeaderBasket: React.FunctionComponent = () => {

    const {data: products, isLoading} = productAPI.useFetchAllQuery();

    return (
        <div className={styles.header__basketWrapper}>
            <a href="" className={styles.header__basketBlock}>
                <img src={headerBasketImg} alt="basket" />
                { isLoading ?
                    <div>Loading...</div> :
                    products && <div className={styles.header__value}>{products.length}</div>}
            </a>
            <div className={styles.basketBody}>

                { isLoading ?
                    <div>Loading...</div> :
                    products &&
                    <>
                        <div className={styles.basketBody__count}>Ваші товари: <span>{products.length}</span></div>
                        <HeaderBasketList products={products}/>
                    </>
                }
            </div>
        </div>
    );
}

export default HeaderBasket;