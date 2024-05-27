import React from "react";
import GiftCardsListItem from "./GiftCardsListItem";
import styles from "./GiftCardsListItems.module.css";


const GiftCardsListItems: React.FunctionComponent<{ products: Array<{ image: string, text: string, minPrice: number, maxPrice: number }> }> = ({ products }) => {

   return (
      <div className={styles.giftCardsListItems}>
         {products.map(product => <GiftCardsListItem image={product.image} text={product.text} minPrice={product.minPrice} maxPrice={product.maxPrice} />)}
      </div>
   );
}

export default GiftCardsListItems;