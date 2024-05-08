import styles from "./OrderItem.module.css";

const OrderItem: React.FunctionComponent<{ name: string, price: number, discount: boolean, image: string }> = ({ name, price, discount, image }) => {
   return (
      <div className={styles.orderItem}>
         <div className={styles.orderItem__body}>
            <div className={styles.orderItem__image}>
               <img src={image} alt={image} />
            </div>
            <div className={styles.orderItem__content}>
               <div className={styles.orderItem__title}>{name}</div>
               <div className={styles.orderItem__price}>{price} грн</div>
               <button className={styles.orderItem__btn}>Додати до кошика</button>
            </div>
         </div>
         <div className={styles.orderItem__action}>
            <button className={styles.orderItem__details}>Деталі замовлення</button>
            <button className={styles.orderItem__sendReview}>Відстеження</button>
         </div>
      </div>
   );
}

export default OrderItem;