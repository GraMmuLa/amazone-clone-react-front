import styles from "./Basket.module.css";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import BasketItem from "./BasketItem";
import { productColorAPI } from "../../redux/api/productColorAPI";
import { userAPI } from "../../redux/api/userAPI";
import BasketItems from "./BasketItems";
import { useNavigate } from "react-router-dom";

const Basket: React.FunctionComponent = () => {

   const { id: userId, isLogged } = useAppSelector(state => state.user);

   const [fetchProductColors, { data: productColors }] = productColorAPI.useLazyFetchAllFavouritedByUserQuery();

   const [removeFavouriteProductColor] = userAPI.useDeleteFavouriteProductColorMutation();

   const [allCheck, setAllCheck] = useState<boolean>(true);

   const [priceSum, setPriceSum] = useState<number>(0);

   const navigate = useNavigate();

   useEffect(() => {
      if (userId)
         fetchProductColors(userId);
   }, [userId]);

   useEffect(() => {
      if (!isLogged)
         navigate("/");
   }, []);

   return (
      <>
         {
            productColors &&
            <main className={styles.basket}>
               <div className={styles.basket__container}>
                  <h1 className={styles.basket__title}>Кошик</h1>
                  <div className={styles.basket__body}>
                     <div className={styles.basket__products}>
                        <div className={styles.basket__allProducts}>
                           {/*<div className={styles.basket__allProductsCheckBoxWrapper}>*/}
                           {/*   <div className={styles.basket__allProductsCheckBox}>*/}
                           {/*      <input onChange={(e) => e.target.checked ? setAllCheck(false) : setAllCheck(true)} id="basket__allProductsEl" type="checkbox"/>*/}
                           {/*      <label className={styles.basket__allProductsLabel} htmlFor="basket__allProductsEl">Всі*/}
                           {/*         товари {`(${productColors.length})`}</label>*/}
                           {/*   </div>*/}
                           {/*   /!* <h3 className={styles.basket__allProductsTitle}>Всі товари {`(${products.length})`}</h3> *!/*/}
                           {/*</div>*/}
                           <BasketItems productColors={productColors}
                              removeProductColor={removeFavouriteProductColor}
                              priceSum={priceSum}
                              setPriceSum={setPriceSum}
                              allCheck={allCheck} />
                        </div>
                     </div>
                     <div className={`${styles.basket__pay} ${styles.payBasket}`}>
                        <h2 className={styles.payBasket__title}>Сума замовлення</h2>
                        <div id="payBasket__allPrice" className={styles.payBasket__allPrice}>
                           <span>{priceSum}</span> грн
                        </div>
                        {
                           priceSum !== 0 ?
                              <button className={styles.payBasket__btn}>Замовити</button> :
                              <button disabled className={styles.payBasket__btnDisabled}>Замовити</button>
                        }
                     </div>
                  </div>
               </div>
            </main>
         }
      </>
   );
}

export default Basket;
