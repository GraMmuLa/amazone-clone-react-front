import styles from "./FAQ.module.css";

const FAQPaymentDilevery: React.FunctionComponent<{ FAQPaymentDileveryArr: Array<{ title: string, text: string }> }> = ({ FAQPaymentDileveryArr }) => {

   return (
      <div className={styles.FAQ__tabsItems}>
         {FAQPaymentDileveryArr.map(FAQPaymentDilever => (
            <a href="" className={styles.FAQ__tabsItem}>
               <div className={styles.FAQ__tabsTitle}>{FAQPaymentDilever.title}</div>
               <div className={styles.FAQ__tabsText}>{FAQPaymentDilever.text}</div>
            </a>))}
      </div>
   );
}

export default FAQPaymentDilevery;