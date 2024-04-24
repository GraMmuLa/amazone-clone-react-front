import React from "react";
import ProductsPageBodyCard from "./ProductsPageBodyCard";
import styles from "./ProductsPageBodyCardList.module.css";
import IProduct from "../../interfaces/IProduct";

const ProductsPageBodyCardList: React.FunctionComponent<{ products: IProduct[] }> = ({ products }) => {
   return (
      <div className={styles.bodyMain__items}>
         {products.map(product => <ProductsPageBodyCard product={product} />)}
      </div>
   );
}

export default ProductsPageBodyCardList;