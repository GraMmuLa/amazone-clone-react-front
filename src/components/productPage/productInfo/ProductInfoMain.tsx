import styles from "./ProductInfoMain.module.css";
import React from "react";
import IProductColor from "../../../interfaces/IProductColor";
import { productSizeAPI } from "../../../redux/api/productSizeAPI";
import { colorAPI } from "../../../redux/api/colorAPI";
import { productAPI } from "../../../redux/api/productAPI";
import { productColorAPI } from "../../../redux/api/productColorAPI";
import { NavLink } from "react-router-dom";
import { productColorImageAPI } from "../../../redux/api/productColorImageAPI";
import { productDetailValueAPI } from "../../../redux/api/productDetailValueAPI";
import { productDetailKeyAPI } from "../../../redux/api/productDetailKeyAPI";
import {discountAPI} from "../../../redux/api/discountAPI";

const ProductInfoMain: React.FunctionComponent<{ productColor: IProductColor }> = ({ productColor }) => {

    const { data: product } = productAPI.useFetchByIdQuery(productColor.productId);

    const Discount: React.FunctionComponent<{discountId: number}> = ({discountId}) => {
        const {data: discount} = discountAPI.useFetchByIdQuery(discountId);

        return (
            <>
                {discount &&
                    <>
                        <h2>Ціна:</h2>
                        <span>{productColor.price-discount.price} грн</span>
                    </>
                }
            </>
        )
    }

    return (
        <div className={styles.productInfoMain}>
            <div className={styles.productInfoMain__price}>
                {productColor.discountId ?
                    <Discount discountId={productColor.discountId}/> :
                    <>
                        <h2>Ціна:</h2>
                        <span>{productColor.price} грн</span>
                    </>
                }
            </div>
            <div className={`${styles.productInfoMain__sizes} productInfoMain__sizes`}>
                <h2>Розмір:</h2>
                <ul>
                    {productColor.productSizeIds &&
                        productColor.productSizeIds.map(productColorSizeId => <li key={productColorSizeId}><Size productColorSizeId={productColorSizeId} /></li>)}
                </ul>
            </div>
            <div className={styles.productInfoMain__color}>
                <div className={styles.productInfoMain__colorWrapper}><h2>Колір:</h2> <Color colorId={productColor.colorId} /></div>
                <ul>
                    {product && product.productColorsIds &&
                        product.productColorsIds.map(productColorId => <li key={productColorId}><ProductColorLink productColorId={productColorId} /></li>)
                    }
                </ul>
            </div>
            <div className={styles.productInfoMain__details}>
                <h2 className={styles.productInfoMain__detailsTitle}>Деталі продукту</h2>
                <div className={styles.productInfoMain__detailsItems}>
                    {product && product.productDetailValuesIds &&
                        product.productDetailValuesIds.map(productDetailValueId => <DetailItem productDetailValueId={productDetailValueId} />)}
                </div>
            </div>
        </div>
    );
}

const Size: React.FunctionComponent<{ productColorSizeId: number }> = ({ productColorSizeId }) => {

    const { data: size } = productSizeAPI.useFetchByIdQuery(productColorSizeId);

    return (
        <>
            {size && <a href="">{size.size}</a>}
        </>
    );
}

const Color: React.FunctionComponent<{ colorId: number }> = ({ colorId }) => {

    const { data: color } = colorAPI.useFetchByIdQuery(colorId);

    return (
        <>
            {color && <span>{color.color}</span>}
        </>
    );
}

const ProductColorLink: React.FunctionComponent<{ productColorId: number }> = ({ productColorId }) => {

    const { data: productColor } = productColorAPI.useFetchByIdQuery(productColorId);

    const MainImage: React.FunctionComponent<{ mainImageId: number }> = ({ mainImageId }) => {

        const { data: image } = productColorImageAPI.useFetchByIdQuery(mainImageId);

        return (
            <>
                {image && <img src={`data:image/jpg;base64,${image.data}`} alt="image color1" />}
            </>
        );
    }

    return (
        <>
            {productColor && productColor.mainImageId &&
                <NavLink to={`/productPage/${productColorId}`}><MainImage mainImageId={productColor.mainImageId} /></NavLink>
            }
        </>
    );
}

const DetailItem: React.FunctionComponent<{ productDetailValueId: number }> = ({ productDetailValueId }) => {

    const { data: productDetailValue } = productDetailValueAPI.useFetchByIdQuery(productDetailValueId);

    const DetailItemKey: React.FunctionComponent<{ productDetailKeyId: number }> = ({ productDetailKeyId }) => {

        const { data: productDetailKey } = productDetailKeyAPI.useFetchByIdQuery(productDetailKeyId);

        return (
            <>
                {productDetailKey &&
                    <div className={styles.productInfoMain__detailsLabel}>{productDetailKey.key}</div>
                }
            </>
        );
    }

    return (
        <>
            {productDetailValue &&
                <div className={styles.productInfoMain__detailsItem}>
                    <DetailItemKey productDetailKeyId={productDetailValue.productDetailKeyId} />
                    <div className={styles.productInfoMain__detailsText}>{productDetailValue.value}</div>
                </div>
            }
        </>
    );
}

export default ProductInfoMain;