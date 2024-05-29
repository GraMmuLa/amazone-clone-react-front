import styles from "./FAQ.module.css";

const FAQRecomendations: React.FunctionComponent<{ FAQRecomendationsArr: Array<{ title: string, text: string }> }> = ({ FAQRecomendationsArr }) => {

   return (
      <div className={styles.FAQ__tabsItems}>
         {FAQRecomendationsArr.map(FAQRecomendation => (
            <a href="" className={styles.FAQ__tabsItem}>
               <div className={styles.FAQ__tabsTitle}>{FAQRecomendation.title}</div>
               <div className={styles.FAQ__tabsText}>{FAQRecomendation.text}</div>
            </a>))}
      </div>
   );
}

export default FAQRecomendations;