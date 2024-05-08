import styles from "./ProductInfoBottom.module.css";
import React from "react";
import IProduct from "../../../interfaces/IProduct";
import ReactMarkdown from "react-markdown"

const ProductInfoBottom: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {
   return (
      <div className={styles.productInfoBottom}>
         <h2 className={styles.productInfoBottom__title}>Про цей предмет</h2>
         <div>
            <ReactMarkdown children={product.description} />
         </div>
      </div>
   );
}

export default ProductInfoBottom;