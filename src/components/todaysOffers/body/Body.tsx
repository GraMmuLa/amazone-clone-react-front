import styles from "./Body.module.css";
import ProductList from "../../productList/ProductList";
import React, {useState} from "react";
import IProductColor from "../../../interfaces/IProductColor";
import ProductListPagination from "../../productListPagination/ProductListPagination";

const Body: React.FunctionComponent<{productColors: IProductColor[]}> = ({productColors}) => {

    const itemsPerPage = 5;

   return (
      <div className={styles.bodyMain}>
         <ProductListPagination productColors={productColors} itemsPerPage={itemsPerPage}/>
      </div>
   );
}

export default Body;