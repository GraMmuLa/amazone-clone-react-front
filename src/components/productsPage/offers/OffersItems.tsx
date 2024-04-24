import React from "react";
import OffersItem from './OffersItem'
import styles from "./OffersItems.module.css";



const OffersItems: React.FunctionComponent<{ info: Array<{ itemTitle: string, itemImg: string, itemAlt: string, itemActive: boolean }> }> = ({ info }) => {
   return (
      <div className={styles.offers__items}>
         {info.map(x => (<OffersItem titles={x.itemTitle} active={x.itemActive} images={x.itemImg} alt={x.itemAlt} />))}
      </div>
   )
}

export default OffersItems;