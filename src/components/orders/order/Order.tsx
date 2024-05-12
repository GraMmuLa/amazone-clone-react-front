import OrderItems from "./OrderItems";
import styles from "./Order.module.css";
import React from "react";

const Order: React.FunctionComponent = () => {
   const orderItems = [
      {
         name: 'Жіночий кардиган-кімоно з квітковим принтом і пухкими рукавами, вільна повсякденна блузка з прикриттям',
         price: 692.12,
         discount: true,
         image: 'image1',
      },
      {
         name: 'Жіночий кардиган-кімоно з квітковим принтом і пухкими рукавами, вільна повсякденна блузка з прикриттям',
         price: 692.12,
         discount: true,
         image: 'image1',
      },
   ] as any
   return (
      <div className={styles.order}>
         {orderItems.length > 0 ? (
            <OrderItems orderItems={orderItems} />
         ) : (
            <p className={styles.orderText}>
               Наразі немає рекомендованих товарів для повторного замовлення. Ви також можете зробити своє <a href="">перше замовлення</a>.
            </p>
         )}
      </div>
   );
}

export default Order;