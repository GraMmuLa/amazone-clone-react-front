import Header from "../header/Header";
import Footer from "../footer/Footer";
import OrdersBody from "./OrdersBody";
import Viewed from "./viewed/Viewed";
import styles from "./Orders.module.css";

const Orders = () => {
   return (
      <>
         <Header />
         <main className={styles.orders}>
            <OrdersBody />
            <Viewed />
         </main>
         <Footer />
      </>
   );
}

export default Orders;