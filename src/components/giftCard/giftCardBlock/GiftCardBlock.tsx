import GiftCardSlider from "../GiftCardSlider/GiftCardSlider";
import GiftCardInfo from "../giftCardInfo/GiftCardInfo";
import styles from "./GiftCardBlock.module.css";
import React from "react";
import cardImage from "../../../imgs/giftCard/giftCard1.svg"
import { productAPI } from "../../../redux/api/productAPI";
import { productColorAPI } from "../../../redux/api/productColorAPI";
import { productColorImageAPI } from "../../../redux/api/productColorImageAPI";
import {productCardDesignImageAPI} from "../../../redux/api/productCardDesignImageAPI";
import {productCardDesignAPI} from "../../../redux/api/productCardDesignAPI";

// const GiftCardBlock: React.FunctionComponent<{ productColorId: number }> = ({ productColorId }) => {
const GiftCardBlock: React.FunctionComponent<{productCardDesignId: number}> = ({productCardDesignId}) => {

   const { data: productCardDesign } = productCardDesignAPI.useFetchByIdQuery(productCardDesignId);

   const Image: React.FunctionComponent<{imageId: number}> = ({imageId}) => {

      const {data: image} = productCardDesignImageAPI.useFetchByIdQuery(imageId);

      return (
          <>
             {image &&
              <div className={styles.giftCardBlock__cardImage}>
                 <img src={`data:image/jpg;base64,${image.data}`} alt="gift card"/>
              </div>
             }
          </>
      );
   }

   return (
       <>
          {productCardDesign &&
           <div className={styles.giftCardBlock}>
              <div className="giftCardBlock__container">
                 <div className={styles.giftCardBlock__wrapper}>
                    <div className={styles.giftCardBlock__cardImageWrapper}>
                       { productCardDesign.productCardDesignImageId &&
                           <Image imageId={productCardDesign.productCardDesignImageId}/> }
                       <button className={styles.giftCardLink}>Замовити</button>
                    </div>
                    <GiftCardInfo/>
                 </div>
              </div>
           </div>
          }
       </>
   );
}


export default GiftCardBlock;