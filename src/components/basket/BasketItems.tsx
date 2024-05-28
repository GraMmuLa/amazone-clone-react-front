import styles from "./BasketItems.module.css";
import BasketItem from "./BasketItem";
import React from "react";

const BasketItems: React.FunctionComponent<{ priceSum: Function, products: Array<{ image: string, text: string, color: string, size: string, price: number }> }> = ({ priceSum, products }) => {

   return (
      <ul className="basketItems">
         {products.map(product => <BasketItem priceSum={priceSum} image={product.image} text={product.text} color={product.color} size={product.size} price={product.price} />)}
      </ul>
   );
}

export default BasketItems;
