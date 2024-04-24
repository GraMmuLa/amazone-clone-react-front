import React from "react";
import styles from "./OffersItem.module.css";


const OffersItems: React.FunctionComponent<{ titles: string, images: string, alt: string, active: boolean }> = ({ titles, images, alt, active }) => {
   return (
      <div className={styles.itemOffers} >
         <div className={styles.itemOffers__image}>
            <a href=''>
               <img src={images} alt={alt} />
            </a>
         </div>
         <a href="" className={`${styles.itemOffers__title} ${active ? styles._active : styles}`}>
            {titles}
         </a>
      </div >
   )
}

export default OffersItems;