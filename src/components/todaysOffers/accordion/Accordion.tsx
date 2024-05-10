import AccordionContent from "./AccordionContent";
import styles from "./Accordion.module.css";
import ISubcategory from "../../../interfaces/ISubcategory";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";
import React from "react";


const Accordion: React.FunctionComponent<{ accordionItems: ISubcategory[] }> = ({ accordionItems }) => {

    const {data: subcategories} = subcategoryAPI.useFetchAllQuery();

    return (
      <div className="accordion">
         <form action="/">
            {subcategories && subcategories.map(subcategory => <AccordionContent key={subcategory.id!} subcategoryId={subcategory.id!} />)}
         </form>
      </div>
   );
}


export default Accordion;