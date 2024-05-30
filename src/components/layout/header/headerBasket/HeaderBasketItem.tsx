import React, { useState } from "react";
import styles from "./HeaderBasketItem.module.css";
import {productColorAPI} from "../../../../redux/api/productColorAPI";
import {colorAPI} from "../../../../redux/api/colorAPI";
import IProductColor from "../../../../interfaces/IProductColor";
import {productColorImageAPI} from "../../../../redux/api/productColorImageAPI";
import {productAPI} from "../../../../redux/api/productAPI";
import {NavLink} from "react-router-dom";

const HeaderBasketItem: React.FunctionComponent<{ productColorId: number }> = ({ productColorId }) => {

    const [isChecked, setIsChecked] = useState(true);

    const {data: productColor} = productColorAPI.useFetchByIdQuery(productColorId);

    const handleCheckboxChange = () => {
        setIsChecked(!isChecked);
    }

    return (
        <>
            {
                productColor &&
                <div className={styles.basketBody__item}>
                    {/*<div className={styles.basketBodyItem__checkboxBlock}>*/}
                    {/*    <input checked={isChecked} onChange={handleCheckboxChange} id={`${productColor.id}`} type="checkbox"/>*/}
                    {/*    <label className={styles.basketBodyItem__label} htmlFor={`${productColor.id}`}></label>*/}
                    {/*</div>*/}
                    {productColor.id && productColor.mainImageId &&
                        <MainImage productColorId={productColor.id} mainImageId={productColor.mainImageId}/>}
                    {<HeaderBasketContent productColor={productColor} productId={productColor.productId}/>}
                </div>
            }
        </>
    );
}

const MainImage: React.FunctionComponent<{ productColorId: number, mainImageId: number }> = ({ productColorId, mainImageId}) => {

    const {data: mainImage} = productColorImageAPI.useFetchByIdQuery(mainImageId);

    return (
        <div className={styles.basketBodyItem__image}>
            <NavLink to={`/productPage/${productColorId}`}>
                {mainImage &&
                    <picture>
                        <source srcSet={`data:image/jpg;base64,${mainImage.data}`} type="image/jpg"/>
                        <img src={`data:image/jpg;base64,${mainImage.data}`}
                             alt="product"/>
                    </picture>
                }
            </NavLink>
        </div>
    );
}

const HeaderBasketContent: React.FunctionComponent<{
    productColor: IProductColor,
    productId: number
}> = ({productColor, productId}) => {

    const {data: product} = productAPI.useFetchByIdQuery(productId);
    const {data: color, isLoading} = colorAPI.useFetchByProductColorIdQuery(productColor.id!);

    return (
        <>
        {isLoading ?
                <div>Loading...</div> :
                <div className={styles.basketBodyItem__content}>
                    <div className={styles.basketBodyItem__body}>
                        {productColor && <div className={styles.basketBodyItem__price}>{productColor.price} грн</div>}
                        {product && <div className={styles.basketBodyItem__text}>{product.name}</div>}
                        {color && <div className={styles.basketBodyItem__info}>{`Колір: ${color.color}`}</div>}
                    </div>
                </div>
            }
        </>
    );
}

export default HeaderBasketItem;