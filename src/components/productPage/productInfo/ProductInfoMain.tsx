import styles from "./ProductInfoMain.module.css";
import React, { SetStateAction, useEffect, useState } from "react";
import IProductColor from "../../../interfaces/IProductColor";
import { productSizeAPI } from "../../../redux/api/productSizeAPI";
import { colorAPI } from "../../../redux/api/colorAPI";
import { productAPI } from "../../../redux/api/productAPI";
import { productColorAPI } from "../../../redux/api/productColorAPI";
import { NavLink } from "react-router-dom";
import { productColorImageAPI } from "../../../redux/api/productColorImageAPI";
import { productDetailValueAPI } from "../../../redux/api/productDetailValueAPI";
import { productDetailKeyAPI } from "../../../redux/api/productDetailKeyAPI";
import { discountAPI } from "../../../redux/api/discountAPI";
import IProductSize from "../../../interfaces/IProductSize";

const ProductInfoMain: React.FunctionComponent<{ productColor: IProductColor }> = ({ productColor }) => {

    const { data: product } = productAPI.useFetchByIdQuery(productColor.productId);
    const [selectedSizeId, setSelectedSizeId] = useState<number>(productColor.productSizeIds![0]);

    const Discount: React.FunctionComponent<{ discountId: number }> = ({ discountId }) => {
        const { data: discount } = discountAPI.useFetchByIdQuery(discountId);

        return (
            <>
                {discount &&
                    <>
                        <h2>Ціна:</h2>
                        <span className={styles.discountWrapper} style={{ color: '#FA6338' }}>{productColor.price - discount.price} грн <span className={styles.discount}>-{Math.round(discount.price / productColor.price * 100)}%</span></span>
                        <span className={styles.prevPrice}>{productColor.price} грн</span>
                    </>
                }
            </>
        )
    }

    return (
        <div className={styles.productInfoMain}>
            <div className={styles.productInfoMain__price}>
                {productColor.discountId ?
                    <Discount discountId={productColor.discountId} /> :
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
                        productColor.productSizeIds.map((productColorSizeId) =>
                            <li key={productColorSizeId}><Size selectedSizeId={selectedSizeId} setSelectedSizeId={setSelectedSizeId} productColorSizeId={productColorSizeId} /></li>
                        )}
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
                        product.productDetailValuesIds.map(productDetailValueId => <DetailItem key={productDetailValueId} productDetailValueId={productDetailValueId} />)}
                </div>
            </div>
        </div>
    );
}

const Size: React.FunctionComponent<{
    productColorSizeId: number,
    selectedSizeId: number,
    setSelectedSizeId: React.Dispatch<SetStateAction<number>>
}> = ({ productColorSizeId, selectedSizeId, setSelectedSizeId }) => {

    const { data: size } = productSizeAPI.useFetchByIdQuery(productColorSizeId);

    const SizeRadio: React.FunctionComponent<{ size: IProductSize }> = ({ size }) => {
        return (
            <>
                {size && <input className={styles.productInfoMain__sizesInput} type="radio" id={`${size.id}`} name='costItems' checked={selectedSizeId === productColorSizeId} onChange={() => setSelectedSizeId(productColorSizeId)} />}
                {size && <label className={styles.productInfoMain__sizesList} htmlFor={`${size.id}`}>{size.size}</label>}
            </>
        );
    }

    return (
        <>
            {size &&
                <SizeRadio size={size} />
            }
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
                <NavLink className='productInfoMain__colorItem' to={`/productPage/${productColorId}`}><MainImage mainImageId={productColor.mainImageId} /></NavLink>
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