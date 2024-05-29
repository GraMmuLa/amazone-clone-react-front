import styles from "./FAQ.module.css";

const FAQAboutUs: React.FunctionComponent<{ FAQAboutUsArr: Array<{ title: string, text: string }> }> = ({ FAQAboutUsArr }) => {

   return (
      <div className={styles.FAQ__tabsItems}>
         {FAQAboutUsArr.map(FAQAboutUs => (
            <a href="" className={styles.FAQ__tabsItem}>
               <div className={styles.FAQ__tabsTitle}>{FAQAboutUs.title}</div>
               <div className={styles.FAQ__tabsText}>{FAQAboutUs.text}</div>
            </a>))}
      </div>
   );
}

export default FAQAboutUs;