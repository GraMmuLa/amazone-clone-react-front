import React from "react";
import RecommendationsItem from "./RecommendationsItem";
import styles from "./RecommendationsItems.module.css";
import IProduct from "../../../interfaces/IProduct";

const RecommendationsItems: React.FunctionComponent<{ products: IProduct[] }> = ({ products }) => {
   return (
      <div className={styles.recommendations__items}>
         {products.map(product => <RecommendationsItem product={product} />)}
      </div>
   );
}

export default RecommendationsItems;