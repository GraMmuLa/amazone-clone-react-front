import styles from "./GiftCardsPopularsItem.module.css";
import React from "react";


const GiftCardsPopularsItem: React.FunctionComponent<{ image: string, title: string, price: number }> = ({ image, title, price }) => {

   return (
      <div className={styles.GiftCardsPopularsItem}>
         <div className={styles.GiftCardsPopularsItem__image}>
            <a href=""><img src={image} alt="gift card" /></a>
         </div>
         <div className={styles.GiftCardsPopularsItem__box}>
            <div className={styles.GiftCardsPopularsItem__block}></div>
            <div className={styles.GiftCardsPopularsItem__UAH}>₴</div>
         </div>
         <a href="" className={styles.GiftCardsPopularsItem__title}>{title}</a>
         <div className={styles.GiftCardsPopularsItem__price}>{price} грн</div>
      </div>
   );
}

export default GiftCardsPopularsItem;