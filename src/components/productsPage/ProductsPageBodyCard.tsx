import styles from "./ProductsPageBodyCard.module.css";
import IProduct from "../../interfaces/IProduct";

const ProductsPageBodyCard: React.FunctionComponent<{ product: IProduct & { discount?: number } }> = ({ product }) => {
   return (
      <div className={styles.bodyMain__item}>
         <div className={styles.bodyMain__image}>
            <a href="">
               <picture>
                  <source srcSet="img/main/image1.webp" type="image/webp" />
                  <img src="img/main/image1.jpg" alt="image1" />
               </picture>
            </a>
         </div>
         <a href="" className={styles.bodyMain__title}>
            {product.name}
         </a>
         <div className={`${styles.bodyMain__price} ${product.discount && styles.discount}`}>{product.price} грн{product.discount && <span>{`-${product.discount}%`}</span>}</div>
      </div>
   );
}

export default ProductsPageBodyCard;