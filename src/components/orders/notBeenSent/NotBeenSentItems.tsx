import NotBeenSentItem from "./NotBeenSentItem";
import styles from "./NotBeenSentItems.module.css";

const NotBeenSentItems: React.FunctionComponent<{ orderItems: Array<{ name: string, price: number, image: string }> }> = ({ orderItems }) => {
   return (
      <div className="notBeenSentItems">
         {orderItems.map(orderItem => <NotBeenSentItem name={orderItem.name} price={orderItem.price} image={orderItem.image} />)}
      </div>
   );
}

export default NotBeenSentItems;