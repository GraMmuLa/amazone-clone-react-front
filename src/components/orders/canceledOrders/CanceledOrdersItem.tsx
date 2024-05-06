import styles from "./CanceledOrdersItem.module.css";

const CanceledOrdersItem: React.FunctionComponent<{ name: string, price: number, image: string }> = ({ name, price, image }) => {
   return (
      <div className="canceledOrdersItem">
         <div className="canceledOrdersItem__body">
            <div className="canceledOrdersItem__image">
               <img src={image} alt={image} />
            </div>
            <div className="canceledOrdersItem__content">
               <div className="canceledOrdersItem__title">{name}</div>
               <div className="canceledOrdersItem__price">{price} грн</div>
               <button className="canceledOrdersItem__btn">Додати до кошика</button>
            </div>
         </div>
         <div className="canceledOrdersItem__action">
            <button className="canceledOrdersItem__details">Деталі замовлення</button>
         </div>
      </div>
   );
}

export default CanceledOrdersItem;