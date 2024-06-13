import styles from "./ThankForFeedback.module.css";
import React from "react";
import thankForFeedbackImage from "../../imgs/thankForFeedback.svg"
import { NavLink } from "react-router-dom";

const ThankForFeedback: React.FunctionComponent<{title: string}> = ({title}) => {

   return (
      <main className={styles.thankForFeedback}>
         <div className={styles.thankForFeedback__container}>
            <div className={styles.thankForFeedback__body}>
               <div className={styles.thankForFeedback__image}>
                  <img src={thankForFeedbackImage} alt="image" />
               </div>
               <h1 className={styles.thankForFeedback__title}>{title}</h1>
               <NavLink to="/" className={styles.thankForFeedback__button}>Повернутись на головну</NavLink>
            </div>
         </div>
      </main >
   );
}

export default ThankForFeedback;
