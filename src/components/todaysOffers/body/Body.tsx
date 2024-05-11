import styles from "./Body.module.css";
import ProductList from "../../productList/ProductList";

const Body = () => {

   return (
      <div className={styles.bodyMain}>
         <ProductList/>
      </div>
   );
}

export default Body;