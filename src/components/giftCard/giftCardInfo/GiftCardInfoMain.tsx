import React, { useState } from "react";
import { emailPattern } from "../../auth/patterns";
import styles from "./GiftCardInfoMain.module.css";
import {productCardSlice} from "../../../redux/slices/productCardSlice";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch";
import {productCardDesignAPI} from "../../../redux/api/productCardDesignAPI";
import IProductCardDesign from "../../../interfaces/IProductCardDesign";
import {productCardDesignImageAPI} from "../../../redux/api/productCardDesignImageAPI";
import {NavLink} from "react-router-dom";

const GiftCardInfoMain: React.FunctionComponent = () => {

   const {data: productCardDesigns} = productCardDesignAPI.useFetchAllQuery();

   const [selectedProductsItem, setSelectedProductsItem] = useState('costItem1');

   const dispatch = useAppDispatch();
   const {setPrice, setFromWho, setEmail, setMessage} = productCardSlice.actions;

   const ProductCardDesignImage: React.FunctionComponent<{productCardDesignId: number, productCardDesignImageId: number}> = ({productCardDesignImageId,
                                                                                                                             productCardDesignId}) => {

      const {data: image} = productCardDesignImageAPI.useFetchByIdQuery(productCardDesignImageId);

      return (
          <>
             {image &&
                 <li>
                    <NavLink to={`/giftCard/${productCardDesignId}`}><img src={`data:image/jpg;base64,${image.data}`} alt="image color1"/></NavLink>
                 </li>
             }
          </>
      );
   }

   return (
       <div className={styles.giftCardInfoMain}>
       <div className={styles.giftCardInfoMain__price}>
            <h2>Ціна:</h2><span>50 грн</span>
         </div>
         <div className={styles.giftCardInfoMain__design}>
            <div className={styles.giftCardInfoMain__designWrapper}><h2>Дизайн:</h2> <span>Thanks So Much</span></div>
            {productCardDesigns &&
                <ul>
                   {productCardDesigns.map((productCardDesign) =>
                      productCardDesign.id &&
                      productCardDesign.productCardDesignImageId &&
                      <ProductCardDesignImage key={productCardDesign.productCardDesignImageId} productCardDesignId={productCardDesign.id} productCardDesignImageId={productCardDesign.productCardDesignImageId}/>)}
                </ul>
            }

         </div>
          <div className={styles.giftCardInfoMain__cost}>
             <div className={styles.giftCardInfoMain__costWrapper}>
                <h2>Вартість:</h2>
                <ul>
                   <li>
                      <input type="radio" id="costItem1" name='costItems' checked={selectedProductsItem === 'costItem1'}
                             onChange={() => {
                                setSelectedProductsItem('costItem1');
                                dispatch(setPrice(50));
                             }}/>
                      <label htmlFor="costItem1">50 грн</label>
                   </li>
                   <li>
                      <input type="radio" id="costItem2" name='costItems' checked={selectedProductsItem === 'costItem2'} onChange={() => {
                        setSelectedProductsItem('costItem2');
                        dispatch(setPrice(200));
                     }} />
                     <label htmlFor="costItem2">200 грн</label>
                  </li>
                  <li>
                     <input type="radio" id="costItem3" name='costItems' checked={selectedProductsItem === 'costItem3'} onChange={() => {
                        setSelectedProductsItem('costItem3');
                        dispatch(setPrice(500));
                     }} />
                     <label htmlFor="costItem3">500 грн</label>
                  </li>
                  <li>
                     <input type="radio" id="costItem4" name='costItems' checked={selectedProductsItem === 'costItem4'} onChange={() => {
                        setSelectedProductsItem('costItem4')
                        dispatch(setPrice(1000));
                     }} />
                     <label htmlFor="costItem4">1000 грн</label>
                  </li>
               </ul>
            </div>
            <div className={styles.giftCardInfoMain__costYourAmount}>
               <h4>Або введіть свою суму:</h4>
               <div className={styles.giftCardInfoMain__costYourAmountBlock}>
                  <input type="number" step=".01" onChange={(e)=>dispatch(setPrice(parseInt(e.target.value)))}/>
                  <span>грн</span>
               </div>
            </div>
         </div>
         <div className={styles.sendMailGiftCard}>
            <div className={styles.sendMailGiftCard__items}>
               <div className={styles.sendMailGiftCard__item}>
                  <label htmlFor="sendMailEmail">Емейл:</label>
                  <input placeholder="Введіть емейл на який прийде карта" id="sendMailEmail" type="text" onChange={(e)=>dispatch(setEmail(e.target.value))} />
               </div>
               <div className={styles.sendMailGiftCard__item}>
                  <label htmlFor="sendMailWho">Від кого:</label>
                  <input id="sendMailWho" type="text" onChange={(e)=>dispatch(setFromWho(e.target.value))}/>
               </div>
               <div className={styles.sendMailGiftCard__item}>
                  <label htmlFor="sendMailSend">Повідомлення:</label>
                  <textarea id="sendMailSend" autoComplete="off" name="SendMailArea" onChange={(e)=>dispatch(setMessage(e.target.value))}></textarea>
               </div>
            </div>
         </div>
      </div>
   );
}

export default GiftCardInfoMain;