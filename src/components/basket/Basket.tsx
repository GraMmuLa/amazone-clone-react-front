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
      return allCheck ? sum : null;
   }

   return (
      <main className={styles.basket}>
         <div className="basket__container">
            <h1 className="basket__title">Кошик</h1>
            <div className="basket__body">
               <div className="basket__products">
                  <div className="basket__allProducts">
                     <div className="basket__allProductsCheckBox">
                        <input onChange={(e) => {
                           e.target.checked ? setAllCheck(1) : setAllCheck(0)
                        }} id="basket__allProductsEl" type="checkbox" />
                        <label htmlFor="basket__allProductsEl">✓</label>
                     </div>
                     <h3 className="basket__allProductsTitle">Всі товари {`(${products.length})`}</h3>
                     <BasketItems priceSum={priceSum} products={products} />
                     <ul className="basket__items"></ul>
                  </div>
               </div>
               <div className="basket__pay payBasket">
                  <h2 className="payBasket__title">Сума замовлення</h2>
                  <div id="payBasket__allPrice" className="payBasket__allPrice"><span>{priceSum()}</span> грн</div>
               </div>
            </div>
         </div>
      </main >
   );
}

export default Basket;
