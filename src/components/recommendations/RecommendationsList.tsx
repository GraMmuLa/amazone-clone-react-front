import React from "react";
import RecommendationsItem from "./RecommendationsItem";
import styles from "./RecommendationsItems.module.css";
import IProduct from "../../interfaces/IProduct";

const RecommendationsList: React.FunctionComponent<{ products: IProduct[] }> = ({ products }) => {
   return (
      <div className={styles.recommendations__items}>
         {products.map(product => <RecommendationsItem key={product.id} product={product} />)}
      </div>
   );
}

export default RecommendationsList;