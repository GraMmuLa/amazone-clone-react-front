import ProductSlider from "../productSwiper/ProductSlider";
import ProductInfo from "../productInfo/ProductInfo";
import styles from "./ProductBlock.module.css";

const ProductBlock = () => {
   return (
      <div className={styles.productBlock}>
         <div className="productPage__container">
            <div className={styles.productBlock__wrapper}>
               <ProductSlider />
               <ProductInfo />
            </div>
         </div>
      </div>
   );
}

export default ProductBlock;