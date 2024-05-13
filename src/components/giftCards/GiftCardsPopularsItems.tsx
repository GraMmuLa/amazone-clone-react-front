import React from "react";
import GiftCardsPopularsItem from "./GiftCardsPopularsItem";
import styles from "./GiftCardsPopularsItems.module.css";


const GiftCardsPopularsItems: React.FunctionComponent<{ products: Array<{ image: string, title: string, price: number }> }> = ({ products }) => {

   return (
      <div className={styles.giftCardsPopularsItems}>
         {products.map(product => <GiftCardsPopularsItem image={product.image} title={product.title} price={product.price} />)}
      </div>
   );
}

export default GiftCardsPopularsItems;