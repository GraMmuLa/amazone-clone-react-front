import styles from "./GiftCardsPopulars.module.css";
import React from "react";
import {productCardDesignAPI} from "../../redux/api/productCardDesignAPI";
import GiftCardsPopularsItem from "./GiftCardsPopularsItem";


const GiftCardsPopulars: React.FunctionComponent = () => {

   const {data: productCardDesigns} = productCardDesignAPI.useFetchAllQuery();

   return (
      <div className={styles.giftCardsPopulars}>
         <div className="giftCardsPopulars__container">
            <h3 className={styles.giftCardsPopulars__title}>Найпопулярніші</h3>
            { productCardDesigns &&
                <div className={styles.giftCardsPopularsItems}>
                   {productCardDesigns.map(productCardDesign => productCardDesign.id && <GiftCardsPopularsItem key={productCardDesign.id}
                       productCardDesign={productCardDesign}/>)}
                </div>
            }
         </div>
      </div>
   );
}

export default GiftCardsPopulars;