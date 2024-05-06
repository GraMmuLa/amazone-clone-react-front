import OrderItem from "./OrderItem";
import styles from "./OrderItems.module.css";

const OrderItems: React.FunctionComponent<{ orderItems: Array<{ name: string, price: number, discount: boolean, image: string }> }> = ({ orderItems }) => {
   return (
      <div className={styles.orderItems}>
         {orderItems.map(orderItem => <OrderItem name={orderItem.name} price={orderItem.price} discount={orderItem.discount} image={orderItem.image} />)}
      </div>
   );
}

export default OrderItems;