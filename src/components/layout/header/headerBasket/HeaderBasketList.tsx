import React from "react";
import HeaderBasketItem from "./HeaderBasketItem";
import styles from "./HeaderBasketList.module.css";
import IProduct from "../../../../interfaces/IProduct";
import {NavLink} from "react-router-dom";

const HeaderBasketList: React.FunctionComponent<{productColorIds: number[]}> = ({ productColorIds }) => {
    return (
        <div className={styles.basketBody__items}>
            {productColorIds.map(productColorId => (<HeaderBasketItem key={productColorId} productColorId={productColorId} />))}
            <NavLink to="/orders" className={styles.basketBody__link}>Перейти до корзини</NavLink>
        </div>
    );
}

export default HeaderBasketList;