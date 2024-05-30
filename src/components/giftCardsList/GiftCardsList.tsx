import React from "react";
import styles from "./GiftCardsList.module.css";
import GiftCardsListItem from "./GiftCardsListItem";
import {productCardDesignAPI} from "../../redux/api/productCardDesignAPI";

const GiftCardsList: React.FunctionComponent = () => {

   const {data: giftCardDesigns} = productCardDesignAPI.useFetchAllQuery();

   const products = [
      {
         image: 'image',
         text: 'Електронна подарункова карта',
         minPrice: 50,
         maxPrice: 1000,
      },
      {
         image: 'image',
         text: 'Електронна подарункова карта',
         minPrice: 50,
         maxPrice: 1500,
      },
      {
         image: 'image',
         text: 'Електронна подарункова карта',
         minPrice: 50,
         maxPrice: 1000,
      },
      {
         image: 'image',
         text: 'Електронна подарункова карта',
         minPrice: 50,
         maxPrice: 1000,
      },
      {
         image: 'image',
         text: 'Електронна подарункова карта',
         minPrice: 50,
         maxPrice: 1000,
      },
   ]

   return (
      <main className={styles.giftCardsList}>
         <div className={styles.giftCardsList__containerMax}>
            <h1 className={styles.giftCardsList__title}>Подарункові карти</h1>
            {giftCardDesigns &&
                <div className={styles.giftCardsListItems}>
                   {giftCardDesigns.map(giftCardDesign => giftCardDesign.id &&
                       <GiftCardsListItem key={giftCardDesign.id} giftCardDesign={giftCardDesign}/>)}
                </div>
            }

         </div>
      </main>
   );
}

export default GiftCardsList;