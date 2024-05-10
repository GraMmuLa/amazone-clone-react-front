import React from "react";
import Accordion from "../accordion/Accordion";
import styles from "./Aside.module.css";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";


const Aside: React.FunctionComponent = () => {

   const {data: subcategories} = subcategoryAPI.useFetchAllQuery();

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
            {subcategories && <Accordion accordionItems={subcategories} /> }
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