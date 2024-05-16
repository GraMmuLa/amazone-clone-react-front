import ProductColorSlider from "../productColorSwiper/ProductColorSlider";
import ProductInfo from "../productInfo/ProductInfo";
import styles from "./ProductBlock.module.css";
import React from "react";
import { productAPI } from "../../../redux/api/productAPI";
import { productColorAPI } from "../../../redux/api/productColorAPI";
import { productColorImageAPI } from "../../../redux/api/productColorImageAPI";

const ProductBlock: React.FunctionComponent<{ productColorId: number }> = ({ productColorId }) => {

    const { data: productColor } = productColorAPI.useFetchByIdQuery(productColorId);

    return (
        <div className={styles.productBlock}>
            <div className="productPage__containerMax">
                <div className={styles.productBlock__wrapper}>
                    {productColor && productColor.id && <ProductColorImages productColorId={productColor.id} />}
                    {productColor && <ProductInfo productColor={productColor} />}
                </div>
            </div>
        </div>
    );
}

const ProductColorImages: React.FunctionComponent<{ productColorId: number }> = ({ productColorId }) => {

    const { data: productColorImages, isSuccess } = productColorImageAPI.useFetchAllByProductColorIdQuery(productColorId);

    return (
        <>
            {productColorImages && <ProductColorSlider productColorImages={productColorImages} />}
        </>
    )
}

export default ProductBlock;