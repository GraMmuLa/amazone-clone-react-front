import React, { useState } from "react";
import Accordion from "../accordion/Accordion";
import styles from "./Aside.module.css";
import { subcategoryAPI } from "../../../redux/api/subcategoryAPI";
import ISubcategory from "../../../interfaces/ISubcategory";


const Aside: React.FunctionComponent<{subcategories: ISubcategory[]}> = ({subcategories}) => {

   const [selectedProductsItem, setSelectedProductsItem] = useState('asideAllProducts');
   const [selectedPrice, setSelectedPrice] = useState('asidePriceProducts1');
   const [selectedDiscount, setSelectedDiscount] = useState('asideDiscountProducts1');

   return (
      <aside className={styles.aside}>
         <div className={styles.asideProductsItems}>
            <div className={styles.asideMain__allProducts}>
               <input type="radio" id="asideAllProducts" name='asideProductsItem' checked={selectedProductsItem === 'asideAllProducts'} onChange={() => setSelectedProductsItem('asideAllProducts')} />
               <label htmlFor="asideAllProducts">Всі товари</label>
            </div>
            <div className={styles.asideMain__inStock}>
               <input type="radio" id="asideInStock" name='asideProductsItem' checked={selectedProductsItem === 'asideInStock'} onChange={() => setSelectedProductsItem('asideInStock')} />
               <label htmlFor="asideInStock">В наявності</label>
            </div>
            <div className={styles.asideMain__wishList}>
               <input type="radio" id="asideWishList" name='asideProductsItem' checked={selectedProductsItem === 'asideWishList'} onChange={() => setSelectedProductsItem('asideWishList')} />
               <label htmlFor="asideWishList">Зі списку бажань</label>
            </div>
         </div>
         <div className={styles.asideMain__sections}>
            <div className={styles.asideMain__sectionsLabel}>Розділи</div>
            {subcategories && <Accordion accordionItems={subcategories} />}
         </div>
         <div className={`${styles.asidePrice} ${styles.asideMain__sections}`}>
            <div className={styles.asidePrice__label}>Ціна</div>
            <div className={styles.asidePrice__allPrices}>
               <ul className={styles.asidePrice__allPricesList}>
                  <li className={styles.asidePrice__allPricesItem}>
                     <input type="radio" id="asidePriceProducts1" name='asidePriceProducts' checked={selectedPrice === 'asidePriceProducts1'} onChange={() => setSelectedPrice('asidePriceProducts1')} />
                     <label htmlFor="asidePriceProducts1">Всі ціни</label>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <input type="radio" id="asidePriceProducts2" name='asidePriceProducts' checked={selectedPrice === 'asidePriceProducts2'} onChange={() => setSelectedPrice('asidePriceProducts2')} />
                     <label htmlFor="asidePriceProducts2">До 200 грн</label>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <input type="radio" id="asidePriceProducts3" name='asidePriceProducts' checked={selectedPrice === 'asidePriceProducts3'} onChange={() => setSelectedPrice('asidePriceProducts3')} />
                     <label htmlFor="asidePriceProducts3">Від 200 грн до 500 грн</label>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <input type="radio" id="asidePriceProducts4" name='asidePriceProducts' checked={selectedPrice === 'asidePriceProducts4'} onChange={() => setSelectedPrice('asidePriceProducts4')} />
                     <label htmlFor="asidePriceProducts4">Від 500 грн до 1000 грн</label>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <input type="radio" id="asidePriceProducts5" name='asidePriceProducts' checked={selectedPrice === 'asidePriceProducts5'} onChange={() => setSelectedPrice('asidePriceProducts5')} />
                     <label htmlFor="asidePriceProducts5">Від 1000 грн до 2000 грн</label>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <input type="radio" id="asidePriceProducts6" name='asidePriceProducts' checked={selectedPrice === 'asidePriceProducts6'} onChange={() => setSelectedPrice('asidePriceProducts6')} />
                     <label htmlFor="asidePriceProducts6">Від 2000 грн до 5000 грн</label>
                  </li>
                  <li className={styles.asidePrice__allPricesItem}>
                     <input type="radio" id="asidePriceProducts7" name='asidePriceProducts' checked={selectedPrice === 'asidePriceProducts7'} onChange={() => setSelectedPrice('asidePriceProducts7')} />
                     <label htmlFor="asidePriceProducts7">Більше 5000 грн</label>
                  </li>
               </ul>
            </div>
         </div>
         <div className={`${styles.asideDiscount} ${styles.asideMain__sections}`}>
            <div className={styles.asideDiscount__label}>Знижка</div>
            <div className={styles.asideDiscount__allProducts}>
               <ul className={styles.asideDiscount__allProductsList}>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <input type="radio" id="asideDiscountProducts1" name='asideDiscountProducts' checked={selectedDiscount === 'asideDiscountProducts1'} onChange={() => setSelectedDiscount('asideDiscountProducts1')} />
                     <label htmlFor="asideDiscountProducts1">Всі товари</label>
                  </li>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <input type="radio" id="asideDiscountProducts2" name='asideDiscountProducts' checked={selectedDiscount === 'asideDiscountProducts2'} onChange={() => setSelectedDiscount('asideDiscountProducts2')} />
                     <label htmlFor="asideDiscountProducts2">10% та більше</label>
                  </li>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <input type="radio" id="asideDiscountProducts3" name='asideDiscountProducts' checked={selectedDiscount === 'asideDiscountProducts3'} onChange={() => setSelectedDiscount('asideDiscountProducts3')} />
                     <label htmlFor="asideDiscountProducts3">25% та більше</label>
                  </li>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <input type="radio" id="asideDiscountProducts4" name='asideDiscountProducts' checked={selectedDiscount === 'asideDiscountProducts4'} onChange={() => setSelectedDiscount('asideDiscountProducts4')} />
                     <label htmlFor="asideDiscountProducts4">50% та більше</label>
                  </li>
                  <li className={styles.asideDiscount__allProductsItem}>
                     <input type="radio" id="asideDiscountProducts5" name='asideDiscountProducts' checked={selectedDiscount === 'asideDiscountProducts5'} onChange={() => setSelectedDiscount('asideDiscountProducts5')} />
                     <label htmlFor="asideDiscountProducts5">75% та більше</label>
                  </li>
               </ul>
            </div>
         </div>
      </aside>
   );
}


export default Aside;