import styles from "./RecommendationsItem.module.css";
import IProduct from "../../../interfaces/IProduct";

const RecommendationsItem: React.FunctionComponent<{ product: IProduct & { discount?: number } }> = ({ product }) => {
   return (
      <div className={styles.recommendationsItem}>
         <div className={styles.recommendationsItem__image}>
            <a href="">
               <img src="img/main/image1.jpg" alt="image1" />
            </a>
         </div>
         <a href="" className={styles.recommendationsItem__title}>
            {product.name}
         </a>
         <div className={`${styles.recommendationsItem__price} ${product.discount && styles.discount}`}>{product.price} грн{product.discount && <span>{`-${product.discount}%`}</span>}</div>
      </div>
   );
}

export default RecommendationsItem;