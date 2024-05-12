import styles from "./CanceledOrdersItem.module.css";

const CanceledOrdersItem: React.FunctionComponent<{ name: string, price: number, discount: boolean, image: string }> = ({ name, price, discount, image }) => {
   return (
      <div className={styles.canceledOrdersItem}>
         <div className={styles.canceledOrdersItem__body}>
            <div className={styles.canceledOrdersItem__image}>
               <a href=""><img src={image} alt={image} /></a>
            </div>
            <div className={styles.canceledOrdersItem__content}>
               <a href="" className={styles.canceledOrdersItem__title}>{name}</a>
               <div className={`${styles.canceledOrdersItem__price} ${discount ? `${styles._discount}` : ''}`}>{price} грн</div>
               <button className={styles.canceledOrdersItem__btn}>Додати до кошика</button>
            </div>
         </div>
         <div className={styles.canceledOrdersItem__action}>
            <a href="" className={styles.canceledOrdersItem__details}>Деталі замовлення</a>
         </div>
      </div>
   );
}

export default CanceledOrdersItem;