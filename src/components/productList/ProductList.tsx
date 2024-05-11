import styles from "./ProductList.module.css";
import React from "react";
import {productAPI} from "../../redux/api/productAPI";
import ProductItem from "./ProductItem";

const ProductList: React.FunctionComponent = () => {

    const {data: products} = productAPI.useFetchAllQuery();

    return (
        <>
            <div className={styles.productList}>
                {products &&
                    <div className={styles.productList__items}>
                        {products.map(product => <ProductItem key={product.id} product={product}/>)}
                    </div>
                }
            </div>
        </>
    );
}

export default ProductList;