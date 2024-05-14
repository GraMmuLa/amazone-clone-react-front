import GiftCardsPopularsItems from "./GiftCardsPopularsItems";
import styles from "./GiftCardsPopulars.module.css";
import React from "react";


const GiftCardsPopulars: React.FunctionComponent = () => {
   const products = [
      {
         image: 'img1',
         title: 'Електронна подарункова карта',
         price: 50,
      },
      {
         image: 'img2',
         title: 'Електронна подарункова карта',
         price: 50,
      },
      {
         image: 'img3',
         title: 'Електронна подарункова карта',
         price: 50,
      },
      {
         image: 'img4',
         title: 'Електронна подарункова карта',
         price: 50,
      },
      {
         image: 'img5',
         title: 'Електронна подарункова карта',
         price: 50,
      },
   ]

   return (
      <div className={styles.giftCardsPopulars}>
         <div className="giftCardsPopulars__container">
            <h3 className={styles.giftCardsPopulars__title}>Найпопулярніші</h3>
            <GiftCardsPopularsItems products={products} />
         </div>
      </div>
   );
}

export default GiftCardsPopulars;