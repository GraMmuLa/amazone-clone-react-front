import ProductsPageBodyCardList from "./ProductsPageBodyCardList";
import styles from "./ProductsPageBody.module.css";
import IProduct from '../../interfaces/IProduct'
import {productAPI} from "../../redux/api/productAPI";


const ProductsPageBody = () => {

   const {data: products} = productAPI.useFetchAllQuery();

   return (
      <div className={styles.bodyMain}>
          {products && <ProductsPageBodyCardList products={products} />}
      </div>
   );
}

export default ProductsPageBody;