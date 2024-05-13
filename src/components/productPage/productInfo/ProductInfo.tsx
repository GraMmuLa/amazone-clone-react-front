import StarsRating from "../starsRating/StarsRating";
import ProductInfoTop from "./ProductInfoTop";
import ProductInfoMain from "./ProductInfoMain";
import ProductInfoBottom from "./ProductInfoBottom";
import styles from "./ProductInfo.module.css";
import IProductColor from "../../../interfaces/IProductColor";
import React from "react";
import { productAPI } from "../../../redux/api/productAPI";

const ProductInfo: React.FunctionComponent<{ productColor: IProductColor }> = ({ productColor }) => {

    const { data: product } = productAPI.useFetchByIdQuery(productColor.productId);

    return (
        <div className={styles.productInfo}>
            {product && <ProductInfoTop productName={product.name} />}
            <ProductInfoMain productColor={productColor} />
            {product && <ProductInfoBottom product={product} />}
        </div>
    );
}

export default ProductInfo;