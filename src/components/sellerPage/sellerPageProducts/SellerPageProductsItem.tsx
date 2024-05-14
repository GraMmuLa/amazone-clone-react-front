import React from "react";
import styles from "./SellerPageProductsItem.module.css";


const SellerPageProductsItem: React.FunctionComponent<{ image: string, title: string, price: number, discount?: boolean }> = ({ image, title, price, discount }) => {

   return (
      <div className={styles.qinsenProductsItem}>
         <div className={styles.qinsenProductsItem__image}>
            <a href=""><img src={image} alt="product image" /></a>
         </div>
         <div className={styles.qinsenProductsItem__title}><a href="">{title}</a></div>
         <div className={`${styles.qinsenProductsItem__price} ${discount ? styles._discount : ''}`}>{price} грн</div>
      </div>
   );
}

export default SellerPageProductsItem;