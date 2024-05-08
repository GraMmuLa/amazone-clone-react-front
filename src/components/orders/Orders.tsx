import OrdersBody from "./OrdersBody";
import Viewed from "./viewed/Viewed";
import styles from "./Orders.module.css";

const Orders = () => {
   return (
      <>
         <main className={styles.orders}>
            <OrdersBody />
            <Viewed />
         </main>
      </>
   );
}

export default Orders;