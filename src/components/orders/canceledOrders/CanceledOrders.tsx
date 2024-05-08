import CanceledOrdersItems from "./CanceledOrdersItems";
import styles from "./CanceledOrders.module.css";
import React from "react";

const CanceledOrders: React.FunctionComponent = () => {
   const canceledOrdersItems = [
      {
         name: 'Жіночий кардиган-кімоно з квітковим принтом і пухкими рукавами, вільна повсякденна блузка з прикриттям',
         price: 692.12,
         image: 'image1',
      },
   ] as any
   return (
      <div className="canceledOrders">
         {canceledOrdersItems.length > 0 ? (
            <CanceledOrdersItems orderItems={canceledOrdersItems} />
         ) : (
            <p className="canceledOrdersText">
            </p>
         )}
      </div>
   );
}

export default CanceledOrders;