import arrow from '../../imgs/arrow.svg'
import styles from "./ProductsPagePagination.module.css";

const ProductsPagePagination = () => {
   return (
      <nav className={styles.naviMain}>
         <a href="" className={`${styles.naviMain__item} ${styles.naviMain__arrowLeft}`}>
            <img src={arrow} alt="arrow left" />
         </a>
         <a href="" className={`${styles.naviMain__item} ${styles.active}`}>
            1
         </a>
         <a href="" className={styles.naviMain__item}>
            2
         </a>
         <a href="" className={styles.naviMain__item}>
            3
         </a>
         <a href="" className={`${styles.naviMain__item} ${styles.disabled}`}>
            ...
         </a>
         <a href="" className={styles.naviMain__item}>
            5
         </a>
         <a href="" className={`${styles.naviMain__item} ${styles.naviMain__arrowRight}`}>
            <img src={arrow} alt="arrow right" />
         </a>
      </nav>
   );
}


export default ProductsPagePagination;