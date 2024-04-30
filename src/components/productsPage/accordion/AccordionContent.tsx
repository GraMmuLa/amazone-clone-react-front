import React, { useState } from 'react';
import arrow from '../../../imgs/arrow.svg'
import AccordionContentBody from './AccordionContentBody'
import styles from "./AccordionContent.module.css";

const AccordionContent: React.FunctionComponent<{ title: string, id: number, items: any[] }> = ({ title, items, id }) => {
   const [isOpen, setIsOpen] = useState(false);

   const toggleOpen = () => setIsOpen(!isOpen);

   return (
      <div className={`${styles.accordion__content} ${isOpen ? `${styles._open}` : `${styles}`}`}>
         <div className={styles.accordion__blockWrapper}>
            <div className={styles.checkbox__block}>
               <input
                  type="checkbox"
                  id={`${id}`}
                  name="category"
                  defaultValue={`${id}`}
               />
               <label
                  htmlFor={`${id}`}
                  className={styles.checkbox__label}
               />
            </div>
            <button type="button" className={styles.accordion__block} onClick={toggleOpen}>
               <div className={`${styles.accordion__title} ${isOpen ? `${styles._open}` : `${styles}`}`}>{title}</div>
               <div className={`${styles.accordion__arrow} ${isOpen ? `${styles._open}` : `${styles}`}`}>
                  <img src={arrow} alt="arrow" />
               </div>
            </button>
         </div>
         <div id='accordion__body' className={`${styles.accordion__body} ${isOpen ? `${styles._open}` : `${styles}`}`}
            style={{ height: isOpen ? `${(20 + 8) * items.length + 15}px` : '0px' }}>
            <AccordionContentBody bodyitems={items} />
         </div>
      </div>
   );
}

export default AccordionContent;
