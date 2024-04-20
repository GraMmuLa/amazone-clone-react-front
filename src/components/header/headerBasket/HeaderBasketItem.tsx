import React, { useState } from "react";
import styles from "./HeaderBasketItem.module.css";

const HeaderBasketItem: React.FunctionComponent<{ productName: string, productPrice: number, productColor: string, inputId: string, labelId: string }> = ({ productName, productPrice, productColor, inputId, labelId }) => {
    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }
    return (
        <div className={styles.basketBody__item}>
            <div className={styles.basketBodyItem__checkboxBlock}>
                <input checked={isChecked} onChange={handleCheckboxChange} id={inputId} type="checkbox" />
                <label className={styles.basketBodyItem__label} htmlFor={labelId}></label>
            </div>
            <div className={styles.basketBodyItem__content}>
                <div className={styles.basketBodyItem__image}>
                    <a href="#">
                        <picture><source srcSet="img/basket/image1.webp" type="image/webp" /><img src="img/basket/image1.jpg" alt="product" /></picture>
                    </a>
                </div>
                <div className={styles.basketBodyItem__body}>
                    <div className={styles.basketBodyItem__price}>{productPrice} грн</div>
                    <div className={styles.basketBodyItem__text}>
                        {productName}
                    </div>
                    <div className={styles.basketBodyItem__info}>Колір: {productColor}</div>
                </div>
            </div>
        </div>
    );
}

export default HeaderBasketItem;