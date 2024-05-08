import OrderAgainItem from "./OrderAgainItem";
import styles from "./OrderAgainItems.module.css";

const OrderAgainItems: React.FunctionComponent<{ orderItems: Array<{ name: string, price: number, image: string }> }> = ({ orderItems }) => {
   return (
      <div className="orderAgainItems">
         {orderItems.map(orderItem => <OrderAgainItem name={orderItem.name} price={orderItem.price} image={orderItem.image} />)}
      </div>
   );
}

export default OrderAgainItems;