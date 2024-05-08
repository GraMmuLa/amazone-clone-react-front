import styles from "./bonuses.module.css";
import image from "../../../imgs/register/image2.png"

const Bonuses = () => {
   return (
      <div className={styles.registerBonuses}>
         <div className={styles.registerBonuses__container}>
            <div className={styles.registerBonuses__image}>
               <img src={image} alt="" />
            </div>
            <div className={styles.registerBonuses__textBlock}>
               <h2 className={styles.registerBonuses__title}>Почніть продавати з бонусами</h2>
               <div className={styles.registerBonuses__text}>
                  <p>Готові стати продавцем? Як новий продавець, ви отримаєте ряд бонусів</p>
               </div>
               <ul className={styles.registerBonuses__list}>
                  <li className={styles.registerBonuses__item}>✔ 10% отримайте додатково за перші 50000 грн отримані на продажі.</li>
                  <li className={styles.registerBonuses__item}>✔ Безкоштовне зберігання та поверенення назад на наших складах.</li>
                  <li className={styles.registerBonuses__item}>✔ 3 місяці безкоштовної реклами ваших тоіарів на сайті.</li>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default Bonuses;