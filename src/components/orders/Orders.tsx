import OrdersBody from "./OrdersBody";
import styles from "./Orders.module.css";
import ProductList from "../productList/ProductList";
import React from "react";
import {productColorAPI} from "../../redux/api/productColorAPI";
import {useAppSelector} from "../../redux/hooks/useAppSelector";

const Orders: React.FunctionComponent = () => {

    const itemsCount = 10;
    const {data: productColors} = productColorAPI.useFetchAllQuery({quantity: itemsCount});

    const {isLogged} = useAppSelector(state => state.user);

   return (
      <>

          <main className={styles.orders}>
              {isLogged ?
                <OrdersBody/> :
                  <h2 className={styles.orders_notLogged}>Для перегляду замовлення увійдіть в аккаунт!</h2>
              }
              <div className={styles.orders__recommendations}>
                  <h2 className={styles.orders__recommendationsTitle}>Клієнти також переглядали</h2>
                  {productColors && <ProductList productColors={productColors} itemsCount={itemsCount}/>}
              </div>
          </main>
      </>
   );
}

export default Orders;