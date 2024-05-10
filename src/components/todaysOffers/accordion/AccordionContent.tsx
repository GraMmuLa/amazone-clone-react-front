import React, { useState } from 'react';
import arrow from '../../../imgs/arrow.svg'
import AccordionContentBody from './AccordionContentBody'
import styles from "./AccordionContent.module.css";
import {subcategoryAPI} from "../../../redux/api/subcategoryAPI";

const AccordionContent: React.FunctionComponent<{ subcategoryId: number }> = ({ subcategoryId }) => {

   const {data: subcategory} = subcategoryAPI.useFetchByIdQuery(subcategoryId);

   const [isOpen, setIsOpen] = useState(false);

   const toggleOpen = () => setIsOpen(!isOpen);

   return (
       <div className={`${styles.accordion__content} ${isOpen ? `${styles._open}` : `${styles}`}`}>
          <div className={styles.accordion__blockWrapper}>
             <div className={styles.checkbox__block}>
                <input
                    type="checkbox"
                    id={`${subcategoryId}`}
                    name="category"
                    defaultValue={`${subcategoryId}`}
                />
                <label
                    htmlFor={`${subcategoryId}`}
                    className={styles.checkbox__label}
                />
             </div>
             <button type="button" className={styles.accordion__block} onClick={toggleOpen}>
                {subcategory && <div
                    className={`${styles.accordion__title} ${isOpen ? `${styles._open}` : `${styles}`}`}>{subcategory.name}</div>}
                <div className={`${styles.accordion__arrow} ${isOpen ? `${styles._open}` : `${styles}`}`}>
                   <img src={arrow} alt="arrow"/>
                </div>
             </button>
          </div>
          {subcategory && subcategory.productTypeIds &&
              <>
              <div id='accordion__body'
                   className={`${styles.accordion__body} ${isOpen ? `${styles._open}` : `${styles}`}`}
                   style={{height: isOpen ? `${(20 + 8) * subcategory.productTypeIds.length + 15}px` : '0px'}}>
                 <AccordionContentBody bodyItems={subcategory.productTypeIds}/>
              </div>
              </>
           }
      </div>
   );
}

export default AccordionContent;
