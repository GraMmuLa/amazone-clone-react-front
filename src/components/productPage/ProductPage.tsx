import ProductBlock from "./productBlock/ProductBlock";
import Reviews from "./reviews/Reviews";
import ProductList from "../productList/ProductList";
import styles from "./ProductPage.module.css";
import React from "react";
import {useParams} from "react-router";

const ProductPage: React.FunctionComponent = () => {

    const {productColorId} = useParams<{productColorId: string}>();

    return (
        <main className={styles.productPage}>
            {productColorId && <ProductBlock productColorId={parseInt(productColorId)}/>}
            <Reviews />
            <div className={styles.productPage__recommendations}>
                <h2 className={styles.productPage__recommendationsTitle}>Клієнти також переглядали</h2>
                <ProductList itemsCount={10}/>
            </div>
        </main>
    );
}

export default ProductPage;