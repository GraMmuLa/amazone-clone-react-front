import styles from "./OrderAgainItem.module.css";

const OrderAgainItem: React.FunctionComponent<{ name: string, price: number, image: string }> = ({ name, price, image }) => {
   return (
      <div className="orderAgainItem">
         <div className="orderAgainItem__body">
            <div className="orderAgainItem__image">
               <img src={image} alt={image} />
            </div>
            <div className="orderAgainItem__content">
               <div className="orderAgainItem__title">{name}</div>
               <div className="orderAgainItem__price">{price} грн</div>
               <button className="orderAgainItem__btn">Замовити знову</button>
            </div>
         </div>
         <div className="orderAgainItem__action">
            <button className="orderAgainItem__details">Деталі замовлення</button>
            <button className="orderAgainItem__sendReview">Написати відгук</button>
         </div>
      </div>
   );
}

export default OrderAgainItem;