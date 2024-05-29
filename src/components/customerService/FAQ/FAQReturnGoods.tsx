import styles from "./FAQ.module.css";

const FAQReturnGoods: React.FunctionComponent<{ FAQReturnGoodsArr: Array<{ title: string, text: string }> }> = ({ FAQReturnGoodsArr }) => {

   return (
      <div className={styles.FAQ__tabsItems}>
         {FAQReturnGoodsArr.map(FAQReturnGood => (
            <a href="" className={styles.FAQ__tabsItem}>
               <div className={styles.FAQ__tabsTitle}>{FAQReturnGood.title}</div>
               <div className={styles.FAQ__tabsText}>{FAQReturnGood.text}</div>
            </a>))}
      </div>
   );
}

export default FAQReturnGoods;