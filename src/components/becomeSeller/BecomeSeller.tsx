import Header from "../layout/header/Header";
import Footer from "../layout/footer/Footer";
import Body from "./body/Body";
import Bonuses from "./bonuses/bonuses";
import styles from "./BecomeSeller.module.css";

const BecomeSeller = () => {
   return (
      <>
         <main className={styles.registerPage}>
            <div className="registerPageTitle__container">
               <h3 className={styles.registerPage__title}>Станьте продавцем та почніть продавати</h3>
            </div>
            <Body />
            <Bonuses />
         </main>
      </>
   );
}

export default BecomeSeller;