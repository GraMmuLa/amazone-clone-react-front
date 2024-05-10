import arrow from "../../../imgs/arrow.svg"
import React, { useState } from "react";
import styles from "./Select.module.css";

const Select: React.FunctionComponent<{ selected: any, setSelected: any }> = ({ selected, setSelected }) => {
   const options = ["Популярності", "Новизні", "Зростанню ціни", "Спаданню ціни"];
   const [isOpen, setIsOpen] = useState(false);
   document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#main__select") && isOpen) {
         setIsOpen(!isOpen);
      }
   });
   return (
      <div className={styles.main__sort}>
         <div id="main__select" className={styles.main__select}>
            <button onClick={(e) => setIsOpen(!isOpen)} className={`${styles.main__selectButton} ${isOpen ? `${styles._open}` : `${styles}`}`}>{selected}<span><img src={arrow} alt="arrow" /></span></button>
            {isOpen && (
               <div className={styles.main__selectBody}>
                  {options.map((option) => <button onClick={(e) => { setSelected(option); setIsOpen(false) }} className={styles.main__selectItem}>{option}</button>)}
               </div>
            )}
         </div>
      </div>

   );
}

export default Select;
