import styles from "./BodyCard.module.css";
import IProduct from "../../../../interfaces/IProduct";
import React from "react";
import IProductColor from "../../../../interfaces/IProductColor";
import {productColorAPI} from "../../../../redux/api/productColorAPI";
import {productColorImageAPI} from "../../../../redux/api/productColorImageAPI";
import {discountAPI} from "../../../../redux/api/discountAPI";
import {NavLink} from "react-router-dom";

const BodyCard: React.FunctionComponent<{ product: IProduct}> = ({ product }) => {

    const {data: productColor} = productColorAPI.useFetchByIdQuery(product.productColorsIds![0]);

    return (
        <>
        {productColor &&
        <div className={styles.bodyMain__item}>
            {productColor.id &&
            <>
                {productColor.mainImageId &&
                    <MainImage productColorId={productColor.id} mainImageId={productColor.mainImageId}/>
                }
                <NavLink to="/" className={styles.bodyMain__title}>
                    {product.name}
                </NavLink>
            </>
            }
            { productColor.discountId ?
                <div className={`${styles.bodyMain__price} ${styles.discount}`}>
                    {productColor.discountId && <DiscountBlock price={productColor.price} discountId={productColor.discountId}/>}
                </div> :
                <span>{productColor.price} грн</span>
            }
        </div>
        }
    </>
    );
}

const MainImage: React.FunctionComponent<{ mainImageId: number, productColorId: number }> = ({
                                                                                                 mainImageId,
                                                                                                 productColorId
                                                                                             }) => {

    const {data: mainImage} = productColorImageAPI.useFetchByIdQuery(mainImageId);

    return (
        <div className={styles.bodyMain__image}>
            {mainImage && <NavLink className={styles.bodyMain__imageLink} to={`/productPage/${productColorId}`}>
                <picture>
                    <source srcSet={'data:image/jpg;base64,' + mainImage.data} type="image/jpg"/>
                    <img src={'data:image/jpg;base64,' + mainImage.data} alt="image1"/>
                </picture>
            </NavLink>
            }
        </div>
    )
}

const DiscountBlock: React.FunctionComponent<{price: number, discountId: number}> = ({price, discountId}) => {

    const {data: discount} = discountAPI.useFetchByIdQuery(discountId);

    const getDiscountPercent = () => {
        if(discount)
            return Math.round(discount.price / (price / 100));
    }

    return (
        <>
            {discount &&
                <>
                    {price} грн
                    <span>{`-${getDiscountPercent()}%`}</span>
                </>
            }
        </>
    );
}

export default BodyCard;