import AccordionContentBodyItem from './AccordionContentBodyItem'
import styles from "./AccordionContentBody.module.css";


const AccordionContentBody: React.FunctionComponent<{ bodyitems: Array<{ id: number, title: string }> }> = ({ bodyitems }) => {
   return (
      <div className="bodyAccordion__content">
         <div className="bodyAccordion__list">
            {bodyitems.map(bodyItem => <AccordionContentBodyItem id={bodyItem.id} title={bodyItem.title} />)}
         </div>
      </div>
   );
}


export default AccordionContentBody;