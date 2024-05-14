import styles from "./SellerHeader.module.css";
import logo from "../../../imgs/qinsen/logo.svg";

const SellerHeader = () => {

   return (
      <div className={styles.qinsenHeader}>
         <div className={styles.qinsenHeader__containerMax}>
            <div className={styles.qinsenHeader__logo}><img src={logo} alt="qinsen logo" /></div>
            <div className={styles.qinsenHeader__body}>
               <div className={styles.qinsenHeader__title}>QINSEN</div>
               <nav className={styles.qinsenHeader__menu}>
                  <ul className={styles.qinsenHeader__list}>
                     <li className={`${styles.qinsenHeader__item} ${styles._active}`}><a href="" className={styles.qinsenHeader__link}>Головна</a></li>
                     <li className={styles.qinsenHeader__item}><a href="" className={styles.qinsenHeader__link}>Нове прибуття</a></li>
                     <li className={styles.qinsenHeader__item}><a href="" className={styles.qinsenHeader__link}>Комбінезони </a></li>
                     <li className={styles.qinsenHeader__item}><a href="" className={styles.qinsenHeader__link}>Боді та корткі топи</a></li>
                     <li className={styles.qinsenHeader__item}><a href="" className={styles.qinsenHeader__link}>Плаття</a></li>
                  </ul>
               </nav>
            </div>
         </div>
      </div>
   );
}

export default SellerHeader;