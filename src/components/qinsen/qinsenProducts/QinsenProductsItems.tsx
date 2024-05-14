import React from "react";
import QinsenProductsItem from "./QinsenProductsItem";
import styles from "./QinsenProductsItems.module.css";


const QinsenProductsItems: React.FunctionComponent<{ products: Array<{ image: string, title: string, price: number, discount?: boolean }> }> = ({ products }) => {

   return (
      <div className={styles.qinsenProductsItems}>
         {products.map(product => <QinsenProductsItem image={product.image} title={product.title} price={product.price} discount={product.discount} />)}
      </div>
   );
}

export default QinsenProductsItems;