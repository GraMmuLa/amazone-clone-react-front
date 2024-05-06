import styles from "./OrdersSearch.module.css";
import image from "../../imgs/orders/search.svg";

const OrdersSearch = () => {
   return (
      <form className={styles.ordersSearch}>
         <input placeholder="Пошук по замовленням" type="text" />
         <button type="submit"><img src={image} alt="" /></button>
      </form>
   );
}

export default OrdersSearch;