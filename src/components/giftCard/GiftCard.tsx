import GiftCardBlock from "./giftCardBlock/GiftCardBlock";
import ProductList from "../productList/ProductList";
import styles from "./GiftCard.module.css";
import React from "react";
import { productColorAPI } from "../../redux/api/productColorAPI";
import {useParams} from "react-router";

const GiftCard: React.FunctionComponent = () => {

    const {id} = useParams();

    const itemsCount = 10;

    const {data: productColors} = productColorAPI.useFetchAllQuery({quantity: itemsCount});

    return (
        <main className={styles.giftCard}>
            {id && <GiftCardBlock productCardDesignId={parseInt(id)} /> }
            <div className={styles.giftCard__recommendations}>
                <div className="giftCard__containerMax">
                    <h2 className={styles.giftCard__recommendationsTitle}>Клієнти також переглядали</h2>
                    { productColors && <ProductList productColors={productColors} itemsCount={itemsCount} /> }
                </div>
            </div>
        </main>
    );
}

export default GiftCard;