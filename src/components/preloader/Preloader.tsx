import styles from "./Preloader.module.css";
import logo from "../../imgs/minLogo.svg"
import loader from "../../imgs/loader.svg"
import React from "react";


const Preloader: React.FunctionComponent = () => {
   return (
      <div className={`${styles.preloader} preloader _active`}>
         <div className={styles.preloader__content}>
            <div className={styles.preloader__image}><img src={logo} alt="logo" /></div>
            <div className={styles.preloader__loader}><img src={loader} alt="spin" /></div>
         </div>
      </div>
   );
}

export default Preloader;