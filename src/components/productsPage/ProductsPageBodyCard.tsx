import styles from "./ProductsPageBodyCard.module.css";
import IProduct from "../../interfaces/IProduct";
import React from "react";
import IProductColor from "../../interfaces/IProductColor";
import {productAPI} from "../../redux/api/productAPI";
import {productColorAPI} from "../../redux/api/productColorAPI";
import {productColorImageAPI} from "../../redux/api/productColorImageAPI";
import {discountAPI} from "../../redux/api/discountAPI";

const ProductsPageBodyCard: React.FunctionComponent<{ product: IProduct}> = ({ product }) => {

    const {data: productColor} = productColorAPI.useFetchByIdQuery(product.productColorsIds![0]);

    return (
        <div className={styles.bodyMain__item}>
            {productColor && productColor.mainImageId && <MainImage mainImageId={productColor.mainImageId}/>}
            <a href="" className={styles.bodyMain__title}>
                {product.name}
            </a>
            { productColor && <div
                className={`${styles.bodyMain__price} ${productColor.discountId && styles.discount}`}>
                {productColor.price} грн
                {productColor.discountId && <DiscountBlock productColor={productColor} discountId={productColor.discountId}/>}
            </div>
            }
        </div>
    );
}

const MainImage: React.FunctionComponent<{ mainImageId: number }> = ({mainImageId}) => {

    const {data: mainImage} = productColorImageAPI.useFetchByIdQuery(mainImageId);

    return (
        <div className={styles.bodyMain__image}>
            {mainImage && <a href="">
                <picture>
                    <source srcSet={'data:image/jpg;base64,' + mainImage.data} type="image/jpg"/>
                    <img src={'data:image/jpg;base64,' + mainImage.data} alt="image1"/>
                </picture>
            </a>}

        </div>
    )
}

const DiscountBlock: React.FunctionComponent<{productColor: IProductColor, discountId: number}> = ({productColor, discountId}) => {

    const {data: discount} = discountAPI.useFetchByIdQuery(discountId);

    const getDiscountPercent = () => {
        if(discount)
            return Math.round(discount.price / (productColor.price / 100));
    }


    return (
        <>
            {discount && <span>{`-${getDiscountPercent()}%`}</span>}
        </>
    );
}

export default ProductsPageBodyCard;