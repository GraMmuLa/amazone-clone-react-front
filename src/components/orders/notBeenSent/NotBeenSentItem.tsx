import styles from "./NotBeenSentItem.module.css";

const NotBeenSentItem: React.FunctionComponent<{ name: string, price: number, discount: boolean, image: string }> = ({ name, price, image, discount }) => {
   return (
      <div className={styles.notBeenSentItem}>
         <div className={styles.notBeenSentItem__body}>
            <div className={styles.notBeenSentItem__image}>
               <a href=""><img src={image} alt={image} /></a>
            </div>
            <div className={styles.notBeenSentItem__content}>
               <a href="" className={styles.notBeenSentItem__title}>{name}</a>
               <div className={`${styles.notBeenSentItem__price} ${discount ? `${styles._discount}` : ''}`}>{price} грн</div>
               <button className={styles.notBeenSentItem__btn}>Додати до кошика</button>
            </div>
         </div>
         <div className={styles.notBeenSentItem__action}>
            <a href="" className={styles.notBeenSentItem__details}>Деталі замовлення</a>
         </div>
      </div>
   );
}

export default NotBeenSentItem;