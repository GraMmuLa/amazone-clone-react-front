import React, { useState } from "react";
import { emailPattern } from "../../auth/patterns";
import styles from "./GiftCardInfoMain.module.css";

const GiftCardInfoMain: React.FunctionComponent = () => {

   const [selectedProductsItem, setSelectedProductsItem] = useState('costItem1');

   const [email, setEmail] = useState<string>("");

   return (
      <div className={styles.giftCardInfoMain}>
         <div className={styles.giftCardInfoMain__price}>
            <h2>Ціна:</h2><span>50 грн</span>
         </div>
         <div className={styles.giftCardInfoMain__design}>
            <div className={styles.giftCardInfoMain__designWrapper}><h2>Дизайн:</h2> <span>Thanks So Much</span></div>
            <ul>
               <li><a href=""><img src="" alt="image color1" /></a></li>
               <li><a href=""><img src="" alt="image color2" /></a></li>
               <li><a href=""><img src="" alt="image color3" /></a></li>
               <li><a href=""><img src="" alt="image color4" /></a></li>
               <li><a href=""><img src="" alt="image color4" /></a></li>
               <li><a href=""><img src="" alt="image color4" /></a></li>
               <li><a href=""><img src="" alt="image color4" /></a></li>
               <li><a href=""><img src="" alt="image color4" /></a></li>
               <li><a href=""><img src="" alt="image color4" /></a></li>
            </ul>
         </div>
         <div className={styles.giftCardInfoMain__cost}>
            <div className={styles.giftCardInfoMain__costWrapper}>
               <h2>Вартість:</h2>
               <ul>
                  <li>
                     <input type="radio" id="costItem1" name='costItems' checked={selectedProductsItem === 'costItem1'} onChange={() => setSelectedProductsItem('costItem1')} />
                     <label htmlFor="costItem1">50 грн</label>
                  </li>
                  <li>
                     <input type="radio" id="costItem2" name='costItems' checked={selectedProductsItem === 'costItem2'} onChange={() => setSelectedProductsItem('costItem2')} />
                     <label htmlFor="costItem2">200 грн</label>
                  </li>
                  <li>
                     <input type="radio" id="costItem3" name='costItems' checked={selectedProductsItem === 'costItem3'} onChange={() => setSelectedProductsItem('costItem3')} />
                     <label htmlFor="costItem3">500 грн</label>
                  </li>
                  <li>
                     <input type="radio" id="costItem4" name='costItems' checked={selectedProductsItem === 'costItem4'} onChange={() => setSelectedProductsItem('costItem4')} />
                     <label htmlFor="costItem4">1000 грн</label>
                  </li>
               </ul>
            </div>
            <div className={styles.giftCardInfoMain__costYourAmount}>
               <h4>Або введіть свою суму:</h4>
               <div className={styles.giftCardInfoMain__costYourAmountBlock}>
                  <input type="number" />
                  <span>грн</span>
               </div>
            </div>
         </div>
         <div className={styles.sendMailGiftCard}>
            <div className={styles.sendMailGiftCard__items}>
               <div className={styles.sendMailGiftCard__item}>
                  <label htmlFor="sendMailEmail">Емейл:</label>
                  <input placeholder="Введіть емейл на який прийде карта" id="sendMailEmail" type="text" />
               </div>
               <div className={styles.sendMailGiftCard__item}>
                  <label htmlFor="sendMailWho">Від кого:</label>
                  <input id="sendMailWho" type="text" />
               </div>
               <div className={styles.sendMailGiftCard__item}>
                  <label htmlFor="sendMailSend">Повідомлення:</label>
                  <textarea id="sendMailSend" autoComplete="off" name="SendMailArea"></textarea>
               </div>
            </div>
         </div>
      </div>
   );
}

export default GiftCardInfoMain;