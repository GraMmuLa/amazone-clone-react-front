import React from "react";
import GiftCardsListItems from "./GiftCardsListItems";
import styles from "./GiftCardsList.module.css";


const GiftCardsList: React.FunctionComponent = () => {

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
            <GiftCardsListItems products={products} />
         </div>
      </main>
   );
}

export default GiftCardsList;