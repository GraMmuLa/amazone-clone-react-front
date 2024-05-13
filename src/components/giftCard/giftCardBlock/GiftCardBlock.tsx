import GiftCardSlider from "../GiftCardSlider/GiftCardSlider";
import GiftCardInfo from "../giftCardInfo/GiftCardInfo";
import styles from "./GiftCardBlock.module.css";
import React from "react";
import cardImage from "../../../imgs/giftCard/giftCard1.svg"
import { productAPI } from "../../../redux/api/productAPI";
import { productColorAPI } from "../../../redux/api/productColorAPI";
import { productColorImageAPI } from "../../../redux/api/productColorImageAPI";

// const GiftCardBlock: React.FunctionComponent<{ productColorId: number }> = ({ productColorId }) => {
const GiftCardBlock: React.FunctionComponent = () => {

   // const { data: productColor } = productColorAPI.useFetchByIdQuery(productColorId);

   return (
      <div className={styles.giftCardBlock}>
         <div className="giftCardBlock__container">
            <div className={styles.giftCardBlock__wrapper}>
               <div className={styles.giftCardBlock__cardImageWrapper}>
                  <div className={styles.giftCardBlock__cardImage}>
                     <img src={cardImage} alt="card image" />
                  </div>
                  <button className={styles.giftCardLink}>Додати до кошика</button>
               </div>
               <GiftCardInfo />
            </div>
         </div>
      </div>
   );
}


export default GiftCardBlock;