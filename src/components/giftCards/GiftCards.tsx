import GiftCardsPopulars from "./GiftCardsPopulars";
import styles from "./GiftCards.module.css";
import giftCards from "../../imgs/giftCards/giftCards.svg"
import specialGiftCards from "../../imgs/giftCards/specialGiftCards.svg"
import step1 from "../../imgs/giftCards/step1.svg"
import step2 from "../../imgs/giftCards/step2.svg"
import step3 from "../../imgs/giftCards/step3.svg"


const GiftCards = () => {

   return (
      <main className={styles.giftCards}>
         <div className={styles.giftCards__block}>
            <div className={styles.giftCards__container}>
               <h2 className={styles.giftCards__tilte}>Подарункові карти</h2>
               <div className={styles.giftCards__items}>
                  <div className={styles.giftCards__item}><a href=""><img src={giftCards} alt="giftCards" /></a></div>
                  <div className={styles.giftCards__item}><a href=""><img src={specialGiftCards} alt="giftCards" /></a></div>
               </div>
            </div>
         </div>
         <GiftCardsPopulars />
         <div className={styles.giftCardsInstructions}>
            <div className={styles.giftCards__container}>
               <div className={styles.giftCardsInstructions__items}>
                  <div className={styles.giftCardsInstructions__item}><img src={step1} alt="step 1" /></div>
                  <div className={styles.giftCardsInstructions__item}><img src={step2} alt="step 2" /></div>
                  <div className={styles.giftCardsInstructions__item}><img src={step3} alt="step 3" /></div>
               </div>
            </div>
         </div>
      </main>
   );
}

export default GiftCards;