import BodyCardList from "./bodyCardList/BodyCardList";
import styles from "./Body.module.css";
import IProduct from '../../../interfaces/IProduct'
import {productAPI} from "../../../redux/api/productAPI";


const Body = () => {

   const {data: products} = productAPI.useFetchAllQuery();

   return (
      <div className={styles.bodyMain}>
          {products && <BodyCardList products={products} />}
      </div>
   );
}

export default Body;