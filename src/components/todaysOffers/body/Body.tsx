import BodyCardList from "./bodyCardList/BodyCardList";
import styles from "./Body.module.css";
import IProduct from '../../../interfaces/IProduct'
import {productAPI} from "../../../redux/api/productAPI";
import ProductList from "../../productList/ProductList";


const Body = () => {

   return (
      <div className={styles.bodyMain}>
         <ProductList />
      </div>
   );
}

export default Body;