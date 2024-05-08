import CanceledOrdersItem from "./CanceledOrdersItem";
import styles from "./CanceledOrdersItems.module.css";

const CanceledOrdersItems: React.FunctionComponent<{ orderItems: Array<{ name: string, price: number, image: string }> }> = ({ orderItems }) => {
   return (
      <div className="CanceledOrdersItems">
         {orderItems.map(orderItem => <CanceledOrdersItem name={orderItem.name} price={orderItem.price} image={orderItem.image} />)}
      </div>
   );
}

export default CanceledOrdersItems;