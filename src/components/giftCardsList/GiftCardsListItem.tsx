import React from "react";
import styles from "./GiftCardsListItem.module.css";


const GiftCardsListItem: React.FunctionComponent<{ image: string, text: string, minPrice: number, maxPrice: number }> = ({ image, text, minPrice, maxPrice }) => {

   return (
      <div className={styles.giftCardsListItem}>
         <div className={styles.giftCardsListItem__image}>
            <a href=""><img src={image} alt={image} /></a>
         </div>
         <div className={styles.giftCardsListItem__text}><a href="">{text}</a></div>
         <div className={styles.giftCardsListItem__price}>
            {minPrice} - {maxPrice} грн
         </div>
      </div>
   );
}

export default GiftCardsListItem;