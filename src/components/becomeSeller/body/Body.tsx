import styles from "./body.module.css";
import image from "../../../imgs/register/image1.png"

const Body = () => {
   return (
      <div className={styles.registerBody}>
         <div className={styles.registerBody__container}>
            <div className={styles.registerBody__textBlock}>
               <h1 className={styles.registerBody__title}>Почніть продавати разом з нами</h1>
               <div className={styles.registerBody__text}>
                  <p>Станьте одним із наших довірених продавців</p>
               </div>
               <a href="" className={styles.registerBody__btn}>Зареєструватись</a>
            </div>
            <div className={styles.registerBody__image}>
               <img src={image} alt="" />
            </div>
         </div>
      </div>
   );
}

export default Body;