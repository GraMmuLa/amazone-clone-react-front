import AccordionContentBodyItem from './AccordionContentBodyItem'
import styles from "./AccordionContentBody.module.css";
import React from "react";


const AccordionContentBody: React.FunctionComponent<{ bodyItems: number[] }> = ({ bodyItems }) => {
    return (
      <div className="bodyAccordion__content">
         <div className="bodyAccordion__list">
            {bodyItems.map(bodyItem => <AccordionContentBodyItem key={bodyItem} itemId={bodyItem} />)}
         </div>
      </div>
   );
}


export default AccordionContentBody;