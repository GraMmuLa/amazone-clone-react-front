import styles from "./ProductList.module.css";
import React from "react";
import ProductItem from "./ProductItem";
import IProductColor from "../../interfaces/IProductColor";

const ProductList: React.FunctionComponent<{productColors: IProductColor[]}> = ({productColors}) => {

    return (
        <>
            <div className={styles.productList}>
                {productColors &&
                    <div className={styles.productList__items}>
                        {productColors.map(productColor => <ProductItem key={productColor.id} productColor={productColor}/>)}
                    </div>
                }
            </div>
        </>
    );
}

export default ProductList;