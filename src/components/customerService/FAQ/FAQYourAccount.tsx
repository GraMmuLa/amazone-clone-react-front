import styles from "./FAQ.module.css";

const FAQYourAccount: React.FunctionComponent<{ FAQYourAccountArr: Array<{ title: string, text: string }> }> = ({ FAQYourAccountArr }) => {

   return (
      <div className={styles.FAQ__tabsItems}>
         {FAQYourAccountArr.map(FAQYourAccount => (
            <a href="" className={styles.FAQ__tabsItem}>
               <div className={styles.FAQ__tabsTitle}>{FAQYourAccount.title}</div>
               <div className={styles.FAQ__tabsText}>{FAQYourAccount.text}</div>
            </a>))}
      </div>
   );
}

export default FAQYourAccount;