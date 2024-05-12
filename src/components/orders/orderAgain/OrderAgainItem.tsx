import styles from "./OrderAgainItem.module.css";

const OrderAgainItem: React.FunctionComponent<{ name: string, price: number, discount: boolean, image: string }> = ({ name, price, discount, image }) => {
   return (
      <div className={styles.orderAgainItem}>
         <div className={styles.orderAgainItem__body}>
            <div className={styles.orderAgainItem__image}>
               <a href=""><img src={image} alt={image} /></a>
            </div>
            <div className={styles.orderAgainItem__content}>
               <a href="" className={styles.orderAgainItem__title}>{name}</a>
               <div className={`${styles.orderAgainItem__price} ${discount ? `${styles._discount}` : ''}`}>{price} грн</div>
               <button className={styles.orderAgainItem__btn}>Додати до кошика</button>
            </div>
         </div>
         <div className={styles.orderAgainItem__action}>
            <a href="" className={styles.orderAgainItem__details}>Деталі замовлення</a>
            <a href="" className={styles.orderAgainItem__sendReview}>Написати відгук</a>
         </div>
      </div>
   );
}

export default OrderAgainItem;