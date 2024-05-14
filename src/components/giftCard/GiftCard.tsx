import GiftCardBlock from "./giftCardBlock/GiftCardBlock";
import ProductList from "../productList/ProductList";
import styles from "./GiftCard.module.css";
import React from "react";
import { useParams } from "react-router";
import { productColorAPI } from "../../redux/api/productColorAPI";

const GiftCard: React.FunctionComponent = () => {

   const { productColorId } = useParams<{ productColorId: any }>();
   const { data: productColors } = productColorAPI.useFetchAllQuery({});

   return (
      <main className={styles.giftCard}>
         <GiftCardBlock />
         <div className={styles.giftCard__recommendations}>
            <div className="giftCard__containerMax">
               <h2 className={styles.giftCard__recommendationsTitle}>Клієнти також переглядали</h2>
               {productColors && <ProductList productColors={productColors} />}
            </div>
         </div>
      </main>
   );
}

export default GiftCard;