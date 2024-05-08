import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import OrdersSearch from "./OrdersSearch";
import Order from "./order/Order";
import OrderAgain from "./orderAgain/OrderAgain";
import NotBeenSent from "./notBeenSent/NotBeenSent";
import CanceledOrders from "./canceledOrders/CanceledOrders";
import styles from "./OrdersBody.module.css";

const OrdersBody = () => {
   return (
      <div className={styles.ordersBody}>
         <div className="ordersBody__container">
            <div className={styles.ordersBodyTop}>
               <h2 className={styles.ordersBody__title}>Ваші замовлення</h2>
               <OrdersSearch />
            </div>
            <Tabs className={styles.ordersBodyTabs}>
               <TabList className={styles.ordersBodyTabList}>
                  <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                     <button>Замовлення</button>
                  </Tab>
                  <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                     <button>Замовити знову</button>
                  </Tab>
                  <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                     <button>Ще не відправлені</button>
                  </Tab>
                  <Tab className={styles.ordersBodyTab} selectedClassName={styles._active}>
                     <button>Скасовані замовлення</button>
                  </Tab>
               </TabList>
               <TabPanel>
                  <Order />
               </TabPanel>
               <TabPanel>
                  <OrderAgain />
               </TabPanel>
               <TabPanel>
                  <NotBeenSent />
               </TabPanel>
               <TabPanel>
                  <CanceledOrders />
               </TabPanel>
            </Tabs>
         </div>
      </div>
   );
}

export default OrdersBody;