import StarsRating from "../../productPage/starsRating/StarsRating";
import styles from "./GiftCardInfoTop.module.css";
import React from "react";
import IProductColor from "../../../interfaces/IProductColor";

// const giftCardInfoTop: React.FunctionComponent<{ productName: string }> = ({ productName }) => {
const GiftCardInfoTop: React.FunctionComponent = () => {

   // TODO rating
   const ratingValue = 4.4;
   return (
      <div className={styles.giftCardInfoTop}>
         <h2 className={styles.giftCardInfoTop__title}>Електронна подарункова карта</h2>
         <div className={styles.giftCardInfoTop__ratingBlock}>
            <div className={styles.giftCardInfoTop__ratingWrapper}>
               <div className={styles.giftCardInfoTop__value}>{ratingValue}</div>
               <StarsRating rating={ratingValue} />
            </div>
            <div className={styles.giftCardInfoTop__count}>Оцінок: <span>61 237</span></div>
         </div>
      </div>
   );
}

export default GiftCardInfoTop;