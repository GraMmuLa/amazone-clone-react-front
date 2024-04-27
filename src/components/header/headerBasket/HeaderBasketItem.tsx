import React, { useState } from "react";
import styles from "./HeaderBasketItem.module.css";
import IProduct from "../../../interfaces/IProduct";
import {productColorAPI} from "../../../redux/api/productColorAPI";

const HeaderBasketItem: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {

    const [isChecked, setIsChecked] = useState(true);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className={styles.basketBody__item}>
            <div className={styles.basketBodyItem__checkboxBlock}>
                <input checked={isChecked} onChange={handleCheckboxChange} id={`${product.id}`} type="checkbox" />
                <label className={styles.basketBodyItem__label} htmlFor={`${product.id}`}></label>
            </div>
            <div className={styles.basketBodyItem__content}>
                <div className={styles.basketBodyItem__image}>
                    <a href="#">
                        <picture><source srcSet="img/basket/image1.webp" type="image/webp" /><img src="img/basket/image1.jpg" alt="product" /></picture>
                    </a>
                </div>
                <div className={styles.basketBodyItem__body}>
                    <div className={styles.basketBodyItem__price}>{product.price} грн</div>
                    <div className={styles.basketBodyItem__text}>
                        {product.name}
                    </div>
                    <ProductColor product={product}/>

                </div>
            </div>
        </div>
    );
}

const ProductColor: React.FunctionComponent<{product: IProduct}> = ({product}) => {

    const {data: productColor, isLoading} = productColorAPI.useFetchByIdQuery(product.productColorsIds[0]);

    return (
        <>
            { isLoading ?
                <div>Loading...</div> :
                productColor && <div className={styles.basketBodyItem__info}>{`Колір: ${productColor.color}`}</div>
            }
        </>
    );
}

export default HeaderBasketItem;