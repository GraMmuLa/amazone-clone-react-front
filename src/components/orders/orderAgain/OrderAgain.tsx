import OrderItems from "./OrderAgainItems";
import styles from "./orderAgain.module.css";
import React from "react";

const OrderAgain: React.FunctionComponent = () => {
   const orderAgainItems = [
      {
         name: 'Жіночий кардиган-кімоно з квітковим принтом і пухкими рукавами, вільна повсякденна блузка з прикриттям',
         price: 692.12,
         image: 'image1',
      },
      {
         name: 'ANRABESS Жіноча літня сукня міді з квадратним вирізом і оборками.',
         price: 1154.32,
         image: 'image2',
      },
   ] as any
   return (
      <div className="orderAgain">
         {orderAgainItems.length > 0 ? (
            <OrderItems orderItems={orderAgainItems} />
         ) : (
            <p className="orderAgainText">
               Наразі немає рекомендованих товарів для повторного замовлення. Ви також можете зробити своє <a href="">перше замовлення</a>.
            </p>
         )}
      </div>
   );
}

export default OrderAgain;