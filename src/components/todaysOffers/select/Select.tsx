import arrow from "../../../imgs/arrow.svg"
import React, { useState } from "react";
import styles from "./Select.module.css";

const Select: React.FunctionComponent<{ selected: { title: string, value: string }, setSelected: React.Dispatch<React.SetStateAction<{ title: string, value: string }>> }> = ({ selected, setSelected }) => {
   const options = [
      {
         title: "Новизні",
         value: "new",
      },
      {
         title: "Зростанню ціни",
         value: "price_asc"
      },
      {
         title: "Спаданню ціни",
         value: "price_desc"
      }];
   const [isOpen, setIsOpen] = useState<boolean>(false);
   document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      if (!target.closest("#main__select") && isOpen) {
         setIsOpen(!isOpen);
      }
   });
   return (
      <div className={styles.main__sort}>
         <div id="main__select" className={styles.main__select}>
            <button onClick={(e) => setIsOpen(!isOpen)} className={`${styles.main__selectButton} ${isOpen ? `${styles._open}` : `${styles}`}`}>{selected.title}<span><img src={arrow} alt="arrow" /></span></button>
            {isOpen && (
               <div className={styles.main__selectBody}>
                  {options.map((option) => <button key={option.value} onClick={(e) => {
                     setSelected(option);
                     setIsOpen(false)
                  }} className={styles.main__selectItem}>{option.title}</button>)}
               </div>
            )}
         </div>
      </div>

   );
}

export default Select;
