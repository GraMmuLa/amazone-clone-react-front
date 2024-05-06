import styles from "./NotBeenSentItem.module.css";

const NotBeenSentItem: React.FunctionComponent<{ name: string, price: number, image: string }> = ({ name, price, image }) => {
   return (
      <div className="notBeenSentItem">
         <div className="notBeenSentItem__body">
            <div className="notBeenSentItem__image">
               <img src={image} alt={image} />
            </div>
            <div className="notBeenSentItem__content">
               <div className="notBeenSentItem__title">{name}</div>
               <div className="notBeenSentItem__price">{price} грн</div>
               <button className="notBeenSentItem__btn">Додати до кошика</button>
            </div>
         </div>
         <div className="notBeenSentItem__action">
            <button className="notBeenSentItem__details">Деталі замовлення</button>
         </div>
      </div>
   );
}

export default NotBeenSentItem;