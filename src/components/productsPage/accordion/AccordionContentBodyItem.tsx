import styles from "./AccordionContentBody.module.css";


const AccordionContentBodyItem: React.FunctionComponent<{ title: string, id: number }> = ({ title, id }) => {
   return (
      <div className={styles.bodyAccordion__item}>
         <input
            type="checkbox"
            id={`${id}`}
            name="category"
            defaultValue={`${id}`}
         />
         <label htmlFor={`${id}`}>
            {title}
         </label>
      </div>
   );
}


export default AccordionContentBodyItem;