import GiftCardBlock from "./giftCardBlock/GiftCardBlock";
import ProductList from "../productList/ProductList";
import styles from "./GiftCard.module.css";
import React, {useState} from "react";
import { productColorAPI } from "../../redux/api/productColorAPI";
import {useParams} from "react-router";
import thankForFeedbackImage from "../../imgs/thankForFeedback.svg";
import {NavLink} from "react-router-dom";
import ThankForFeedback from "../thankForFeedback/ThankForFeedback";

const GiftCard: React.FunctionComponent = () => {

    const {id} = useParams();

    const itemsCount = 10;

    const {data: productColors} = productColorAPI.useFetchAllQuery({quantity: itemsCount});

    const [isOrdered, setIsOrdered] = useState<boolean>(false);

    return (
        <>
            {isOrdered ?
                <ThankForFeedback title={"Замовлено успішно"}/> :
                <main className={styles.giftCard}>
                    {id && <GiftCardBlock isOrdered={isOrdered} setIsOrdered={setIsOrdered}
                                          productCardDesignId={parseInt(id)}/>}
                    <div className={styles.giftCard__recommendations}>
                        <div className="giftCard__containerMax">
                            <h2 className={styles.giftCard__recommendationsTitle}>Клієнти також переглядали</h2>
                            {productColors && <ProductList productColors={productColors} itemsCount={itemsCount}/>}
                        </div>
                    </div>
                </main>
            }
        </>

    );
}

export default GiftCard;