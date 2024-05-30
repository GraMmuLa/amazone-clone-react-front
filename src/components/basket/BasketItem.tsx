import styles from "./BasketItem.module.css";
import React, { useEffect, useState } from "react";
import basketDelete from "../../imgs/basketDelete.svg";

const BasketItem: React.FunctionComponent<{ priceSum: Function, image: string, text: string, color: string, size: string, price: number }> = ({ priceSum, image, text, color, size, price }) => {

   const [isChecked, setIsChecked] = useState(true);

   if (isChecked) {
      const gg = document.querySelector("#payBasket__allPrice span") as HTMLElement;
      gg.textContent = `${price}`;
   }

   return (
      <li className={styles.basketItem}>
         <div className={styles.basketItemCheckBlock}>
            <input checked={isChecked} onChange={(e) => {
               e.target.checked ? setIsChecked(true) : setIsChecked(false)
            }} id={text} type="checkbox" />
            <label className={styles.basketItemLabel} htmlFor={text}></label>
         </div>
         <div className={styles.basketItem__body}>
            <div className={styles.basketItem__image}>
               <a href=""><img src={image} alt={image} /></a>
            </div>
            <div className={styles.basketItem__content}>
               <a href="" className={styles.basketItem__title}>{text}</a>
               <div className={styles.basketItem__info}>{color}/{size}</div>
               <div className={styles.basketItem__bottom}>
                  <div className={styles.basketItem__price}>{price} грн</div>
                  <button className={styles.basketItem__delete}><img src={basketDelete} alt="delete" /></button>
               </div>
            </div>
         </div>
      </li>
   );
}

export default BasketItem;
