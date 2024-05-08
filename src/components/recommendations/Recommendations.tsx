import RecommendationsList from "./RecommendationsList";
import styles from "./Recommendations.module.css";
import IProduct from "../../interfaces/IProduct.js";
import React from "react";
import {productAPI} from "../../redux/api/productAPI";

const Recommendations: React.FunctionComponent = () => {

    const {data: products} = productAPI.useFetchAllQuery();

    return (
      <div className={styles.recommendations}>
         <div className="recommendations__container">
            <h2 className={styles.recommendations__title}>Клієнти також переглядали</h2>
             {products && <RecommendationsList products={products} />}
         </div>
      </div>
   );
}

export default Recommendations;