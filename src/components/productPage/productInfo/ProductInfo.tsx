import StarsRating from "../starsRating/StarsRating";
import ProductInfoTop from "./ProductInfoTop";
import ProductInfoMain from "./ProductInfoMain";
import ProductInfoBottom from "./ProductInfoBottom";
import styles from "./ProductInfo.module.css";

const ProductInfo = () => {
   return (
      <div className={styles.productInfo}>
         <ProductInfoTop />
         <ProductInfoMain />
         <ProductInfoBottom />
      </div>
   );
}

export default ProductInfo;