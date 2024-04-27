import React from "react";
import HeaderBasketItem from "./HeaderBasketItem";
import styles from "./HeaderBasketList.module.css";
import IProduct from "../../../interfaces/IProduct";

const HeaderBasketList: React.FunctionComponent<{products: IProduct[]}> = ({ products }) => {
    return (
        <div className={styles.basketBody__items}>
            {products.map(product => (<HeaderBasketItem key={product.id} product={product} />))}
            <a href="" className={styles.basketBody__link}>Перейти до корзини</a>
        </div>
    );
}

export default HeaderBasketList;