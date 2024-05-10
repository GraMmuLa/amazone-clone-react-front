import React from "react";
import BodyCard from "../bodyCard/BodyCard";
import styles from "./BodyCardList.module.css";
import IProduct from "../../../../interfaces/IProduct";

const BodyCardList: React.FunctionComponent<{ products: IProduct[] }> = ({ products }) => {
   return (
      <div className={styles.bodyMain__items}>
         {products.map(product => <BodyCard key={product.id!} product={product} />)}
      </div>
   );
}

export default BodyCardList;