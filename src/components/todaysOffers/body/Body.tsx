import styles from "./Body.module.css";
import ProductList from "../../productList/ProductList";
import React from "react";
import IProductColor from "../../../interfaces/IProductColor";

const Body: React.FunctionComponent<{productColors: IProductColor[]}> = ({productColors}) => {

   return (
      <div className={styles.bodyMain}>
         <ProductList productColors={productColors}/>
      </div>
   );
}

export default Body;