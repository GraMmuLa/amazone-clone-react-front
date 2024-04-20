import React from "react";
import HeaderBasketItem from "./HeaderBasketItem";
import styles from "./HeaderBasketList.module.css";

const HeaderBasketList: React.FunctionComponent<{ products: Array<{ productName: string, productPrice: number, productColor: string, inputId: string, labelId: string }> }> = ({ products }) => {
    return (
        <div className={styles.basketBody__items}>
            {products.map(x => (<HeaderBasketItem productName={x.productName} productPrice={x.productPrice} productColor={x.productColor} inputId={x.inputId} labelId={x.labelId} />))}
            <a href="" className={styles.basketBody__link}>Перейти до корзини</a>
        </div>
    );
}

export default HeaderBasketList;