import React from "react";
import SellerPageProductsItem from "./SellerPageProductsItem";
import styles from "./SellerPageProductsItems.module.css";


const SellerPageProductsItems: React.FunctionComponent<{ products: Array<{ image: string, title: string, price: number, discount?: boolean }> }> = ({ products }) => {

   return (
      <div className={styles.qinsenProductsItems}>
         {products.map(product => <SellerPageProductsItem image={product.image} title={product.title} price={product.price} discount={product.discount} />)}
      </div>
   );
}

export default SellerPageProductsItems;