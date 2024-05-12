import NotBeenSentItem from "./NotBeenSentItem";
import styles from "./NotBeenSentItems.module.css";

const NotBeenSentItems: React.FunctionComponent<{ orderItems: Array<{ name: string, price: number, discount: boolean, image: string }> }> = ({ orderItems }) => {
   return (
      <div className="notBeenSentItems">
         {orderItems.map(orderItem => <NotBeenSentItem name={orderItem.name} price={orderItem.price} discount={orderItem.discount} image={orderItem.image} />)}
      </div>
   );
}

export default NotBeenSentItems;