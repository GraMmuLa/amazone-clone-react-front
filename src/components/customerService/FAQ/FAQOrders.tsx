import styles from "./FAQ.module.css";

const FAQOrders: React.FunctionComponent<{ FAQOrdersArr: Array<{ title: string, text: string }> }> = ({ FAQOrdersArr }) => {

   return (
      <div className={styles.FAQ__tabsItems}>
         {FAQOrdersArr.map(FAQOrder => (
            <a href="" className={styles.FAQ__tabsItem}>
               <div className={styles.FAQ__tabsTitle}>{FAQOrder.title}</div>
               <div className={styles.FAQ__tabsText}>{FAQOrder.text}</div>
            </a>))}
      </div>
   );
}

export default FAQOrders;