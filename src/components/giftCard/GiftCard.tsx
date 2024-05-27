import GiftCardBlock from "./giftCardBlock/GiftCardBlock";
import ProductList from "../productList/ProductList";
import styles from "./GiftCard.module.css";
import React from "react";
import { productColorAPI } from "../../redux/api/productColorAPI";
import {useParams} from "react-router";

const GiftCard: React.FunctionComponent = () => {

    const {id} = useParams();

    return (
        <main className={styles.giftCard}>
            {id && <GiftCardBlock productCardDesignId={parseInt(id)} /> }
            <div className={styles.giftCard__recommendations}>
                <div className="giftCard__containerMax">
                    <h2 className={styles.giftCard__recommendationsTitle}>Клієнти також переглядали</h2>
                    <ProductList itemsCount={10} />
                </div>
            </div>
        </main>
    );
}

export default GiftCard;