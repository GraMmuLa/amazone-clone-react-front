import React, { useState } from "react";
import styles from "./HeaderBasketItem.module.css";
import IProduct from "../../../../interfaces/IProduct";
import {productColorAPI} from "../../../../redux/api/productColorAPI";
import {colorAPI} from "../../../../redux/api/colorAPI";
import IProductColor from "../../../../interfaces/IProductColor";
import {productColorImageAPI} from "../../../../redux/api/productColorImageAPI";

const HeaderBasketItem: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {

    const [isChecked, setIsChecked] = useState(true);

    const {data: productColor} = productColorAPI.useFetchByIdQuery(product.productColorsIds![0]);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <div className={styles.basketBody__item}>
            <div className={styles.basketBodyItem__checkboxBlock}>
                <input checked={isChecked} onChange={handleCheckboxChange} id={`${product.id}`} type="checkbox" />
                <label className={styles.basketBodyItem__label} htmlFor={`${product.id}`}></label>
            </div>
            {productColor && productColor.mainImageId && <MainImage mainImageId={productColor.mainImageId}/>}
            {productColor && <HeaderBasketContent productColor={productColor} productName={product.name}/>}
        </div>
    );
}

const MainImage: React.FunctionComponent<{mainImageId: number}> = ({mainImageId}) => {

    const {data: mainImage} = productColorImageAPI.useFetchByIdQuery(mainImageId);

    return (
        <div className={styles.basketBodyItem__image}>
            <a href="#">
                { mainImage &&
                    <picture>
                        <source srcSet={`data:image/jpg;base64,${mainImage.data}`} type="image/jpg"/>
                        <img src={`data:image/jpg;base64,${mainImage.data}`}
                             alt="product"/>
                    </picture>
                }
            </a>
        </div>
    );
}

const HeaderBasketContent: React.FunctionComponent<{
    productColor: IProductColor,
    productName: string
}> = ({productColor, productName}) => {

    const {data: color, isLoading} = colorAPI.useFetchByProductColorIdQuery(productColor.id!);

    return (
        <>
        {isLoading ?
                <div>Loading...</div> :
                <div className={styles.basketBodyItem__content}>
                    <div className={styles.basketBodyItem__body}>
                        {productColor && <div className={styles.basketBodyItem__price}>{productColor.price} грн</div>}
                        <div className={styles.basketBodyItem__text}>
                            {productName}
                        </div>
                        {color && <div className={styles.basketBodyItem__info}>{`Колір: ${color.color}`}</div>}
                    </div>
                </div>
            }
        </>
    );
}

export default HeaderBasketItem;