import styles from "./Basket.module.css";
import BasketItems from "./BasketItems";
import React, { useState } from "react";

const Basket: React.FunctionComponent = () => {

   const products = [
      {
         image: "image",
         text: "QINSEN Жіночі міні-сукні з ліфом із квадратним вирізом і довгими рукавами, кльош із бічними розрізами",
         color: "Чорний",
         size: "L",
         price: 1000,
      },
      {
         image: "image",
         text: "Жіночі чорні шкіряні спідниці з високою талією, облягаючі міні-спідниці з високим бічним розрізом",
         color: "Чорний",
         size: "M",
         price: 1000,
      },
   ]


   const [allCheck, setAllCheck] = useState(Number);

   const priceSum = () => {
      let sum = 0;
      products.forEach(product => sum += product.price);
      return allCheck ? sum : 0;
   }

   return (
      <main className={styles.basket}>
         <div className={styles.basket__container}>
            <h1 className={styles.basket__title}>Кошик</h1>
            <div className={styles.basket__body}>
               <div className={styles.basket__products}>
                  <div className={styles.basket__allProducts}>
                     <div className={styles.basket__allProductsCheckBoxWrapper}>
                        <div className={styles.basket__allProductsCheckBox}>
                           <input onChange={(e) => {
                              e.target.checked ? setAllCheck(1) : setAllCheck(0)
                           }} id="basket__allProductsEl" type="checkbox" />
                           <label className={styles.basket__allProductsLabel} htmlFor="basket__allProductsEl"></label>
                        </div>
                        <h3 className={styles.basket__allProductsTitle}>Всі товари {`(${products.length})`}</h3>
                     </div>
                     <BasketItems priceSum={priceSum} products={products} />
                  </div>
               </div>
               <div className={`${styles.basket__pay} ${styles.payBasket}`}>
                  <h2 className={styles.payBasket__title}>Сума замовлення</h2>
                  <div id="payBasket__allPrice" className={styles.payBasket__allPrice}><span>{priceSum()}</span> грн</div>
                  <button className={styles.payBasket__btn}>Замовити</button>
               </div>
            </div>
         </div>
      </main >
   );
}

export default Basket;
