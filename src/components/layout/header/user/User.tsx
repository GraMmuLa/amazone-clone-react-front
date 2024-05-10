import styles from "./User.module.css";
import arrow from "../../../../imgs/arrow.svg"
import React from "react";

const User: React.FunctionComponent = () => {
   return (
      <div id="user" className={styles.user}>
         <div className={styles.user__top}>
            {1 ? (
               <>
                  <div className={styles.user__ava}><img src="" alt="avatar" /></div>
                  <div className={styles.user__name}>Kateryna_syrai</div>
               </>
            ) : (
               <>
                  <div className={styles.user__regAva}><img src="" alt="reg avatar" /></div>
                  <div className={styles.user__regAction}>
                     <button className={styles.user__login}>Вхід</button>
                     <button className={styles.user__register}>Зареєструватися</button>
                  </div>
               </>
            )}
         </div>
         <div className={styles.user__body}>
            <ul className={styles.user__list}>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Жіночий одяг<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Чоловічий одяг<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Взуття<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Прикраси<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Телефони<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Ноутбуки<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Планшети<img src={arrow} alt="arrow" /></a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Доставка</a></li>
               <li className={styles.user__item}><a href="" className={styles.user__link}>Налаштування</a></li>
            </ul>
         </div>
      </div>
   );
}

export default User;