import styles from "./AddProductSelect.module.css";
import React, { useState } from "react";
import arrow from "../../../imgs/arrow.svg"

const AddProductSelect: React.FunctionComponent<{ selected: any, setSelected: any }> = ({ selected, setSelected }) => {
   const options = ["1", "2", "3", "4"];
   const [isOpen, setIsOpen] = useState(false);
   document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#addProductSelect") && isOpen) {
         setIsOpen(!isOpen);
      }
   });
   return (
      <div id="addProductSelect" className={styles.addProductSelect}>
         <button type="button" onClick={(e) => setIsOpen(!isOpen)} className={`${styles.addProductSelect__button} ${isOpen ? `${styles._open}` : `${styles}`}`}>{selected}<span><img src={arrow} alt="arrow" /></span></button>
         {isOpen && (
            <ul className={styles.addProductSelect__list}>
               {options.map((option) => <li><button type="button" onClick={(e) => { setSelected(option); setIsOpen(false) }} className={`${styles.main__selectItem} ${isOpen ? `${styles._open}` : `${styles}`}`}>{option}</button></li>)}
            </ul>
         )}
      </div>
   )
}

export default AddProductSelect;