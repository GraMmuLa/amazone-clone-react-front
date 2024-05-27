import styles from "./GiftCardsList.module.css";


const GiftCardsList = () => {

   return (
      <main className={styles.giftCardsList}>
         <div className="giftCardsList__container">
            <h1 className="giftCardsList__tilte"></h1>
            <div className="giftCardsList__items">

            </div>
         </div>
      </main>
   );
}

export default GiftCardsList;