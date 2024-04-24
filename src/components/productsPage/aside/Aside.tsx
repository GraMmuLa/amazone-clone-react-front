import React from "react";
import Accordion from "../accordion/Accordion";
import styles from "./Aside.module.css";


const Aside: React.FunctionComponent = () => {

   const AccordionContent = [
      {
         title: 'title1',
         id: 10,
         items: [
            {
               id: 11,
               title: "title11"
            },
            {
               id: 12,
               title: "title12"
            },
            {
               id: 13,
               title: "title13"
            },
            {
               id: 14,
               title: "title14"
            },
            {
               id: 15,
               title: "title15"
            }
         ]
      },
      {
         title: 'title2',
         id: 20,
         items: [
            {
               id: 21,
               title: "title21"
            },
            {
               id: 22,
               title: "title22"
            },
            {
               id: 23,
               title: "title23"
            },
            {
               id: 24,
               title: "title24"
            }
         ]
      },
      {
         title: 'title3',
         id: 30,
         items: [
            {
               id: 31,
               title: "title31"
            },
            {
               id: 32,
               title: "title32"
            },
            {
               id: 33,
               title: "title33"
            },
            {
               id: 34,
               title: "title34"
            },
            {
               id: 35,
               title: "title35"
            },
            {
               id: 36,
               title: "title36"
            }
         ]
      },
   ]

   return (
      <aside className={styles.aside}>
         <a href="" className={styles.asideMain__allProducts}>
            Всі товари
         </a>
         <a href="" className={styles.asideMain__inStock}>
            В наявності
         </a>
         <a href="" className={styles.asideMain__wishList}>
            Зі списку бажань
         </a>
         <div className={styles.asideMain__sections}>
            <div className={styles.asideMain__sectionsLabel}>Розділи</div>
            <Accordion accordionItems={AccordionContent} />
         </div>
         <div className={`${styles.asidePrice} ${styles.asideMain__sections}`}>
            <div className={styles.asidePrice__label}>Ціна</div>
            <div className={styles.asidePrice__allPrices}>
               <div className={styles.asidePrice__allPricesLabel}>Всі ціни</div>
               <ul className={styles.asidePrice__allPricesList}>
                  <li className={styles.asidePrice__allPricesItem}>
                     <a href="" className={styles.asidePrice__allPricesLink}>
                        До 200 грн
                     </a>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <a href="" className={styles.asidePrice__allPricesLink}>
                        Від 200 грн до 500 грн
                     </a>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <a href="" className={styles.asidePrice__allPricesLink}>
                        Від 500 грн до 1000 грн
                     </a>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <a href="" className={styles.asidePrice__allPricesLink}>
                        Від 1000 грн до 2000 грн
                     </a>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <a href="" className={styles.asidePrice__allPricesLink}>
                        Від 2000 грн до 5000 грн
                     </a>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <a href="" className={styles.asidePrice__allPricesLink}>
                        Більше 5000 грн
                     </a>
                  </li>
               </ul>
            </div>
         </div>
         <div className={`${styles.asideDiscount} ${styles.asideMain__sections}`}>
            <div className={styles.asideDiscount__label}>Знижка</div>
            <div className={styles.asideDiscount__allProducts}>
               <div className={styles.asideDiscount__allProductsLabel}>Всі товари</div>
               <ul className={styles.asideDiscount__allProductsList}>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <a href="" className={styles.asideDiscount__allProductsLink}>
                        10% та більше
                     </a>
                  </li>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <a href="" className={styles.asideDiscount__allProductsLink}>
                        25% та більше
                     </a>
                  </li>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <a href="" className={styles.asideDiscount__allProductsLink}>
                        50% та більше
                     </a>
                  </li>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <a href="" className={styles.asideDiscount__allProductsLink}>
                        75% та більше
                     </a>
                  </li>
               </ul>
            </div>
         </div>
      </aside>
   );
}


export default Aside;