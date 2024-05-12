import styles from "./OrderItem.module.css";

const OrderItem: React.FunctionComponent<{ name: string, price: number, discount: boolean, image: string }> = ({ name, price, discount, image }) => {
   return (
      <div className={styles.orderItem}>
         <div className={styles.orderItem__body}>
            <div className={styles.orderItem__image}>
               <a href=""><img src={image} alt={image} /></a>
            </div>
            <div className={styles.orderItem__content}>
               <a href="" className={styles.orderItem__title}>{name}</a>
               <div className={`${styles.orderItem__price} ${discount ? `${styles._discount}` : ''}`}>{price} грн</div>
               <button className={styles.orderItem__btn}>Додати до кошика</button>
            </div>
         </div>
         <div className={styles.orderItem__action}>
            <a href="" className={styles.orderItem__details}>Деталі замовлення</a>
            <a href="" className={styles.orderItem__sendReview}>Відстеження</a>
         </div>
      </div>
   );
}

export default OrderItem;