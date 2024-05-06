import ProductBlock from "./productBlock/ProductBlock";
import Reviews from "./reviews/Reviews";
import Recommendations from "../recommendations/Recommendations";
import styles from "./ProductPage.module.css";
import React, {useEffect} from "react";
import {productAPI} from "../../redux/api/productAPI";
import {useParams} from "react-router";

const ProductPage: React.FunctionComponent = () => {

    const {productColorId} = useParams<{productColorId: string}>();

    return (
        <main className={styles.productPage}>
            {productColorId && <ProductBlock productColorId={parseInt(productColorId)}/>}
            <Reviews />
            <Recommendations/>
        </main>
    );
}

export default ProductPage;