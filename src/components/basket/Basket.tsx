import styles from "./Basket.module.css";
import React from "react";

const Basket: React.FunctionComponent = () => {

   const products = [
      {
         image: "image",
         text: "QINSEN  Жіночі міні-сукні з ліфом із квадратним вирізом і довгими рукавами, кльош із бічними розрізами",
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


   const priceSum = () => {
      let sum = 0;
      products.forEach(product => sum += product.price);
      return sum;
   }

   return (
      <main className={styles.basket}>
         <div className="basket__container">
            <h1 className="basket__title"></h1>
            <div className="basket__body">
               <div className="basket__products"></div>
               <div className="basket__pay payBasket">
                  <h2 className="payBasket__title"></h2>
                  <div className="payBasket__allPrice">{priceSum()}грн</div>
               </div>
            </div>
         </div>
      </main >
   );
}

export default Basket;
