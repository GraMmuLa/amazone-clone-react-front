import styles from "./GiftCardInfoBottom.module.css";
import React from "react";
import IProduct from "../../../interfaces/IProduct";
import ReactMarkdown from "react-markdown"

const GiftCardInfoBottom: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {
   return (
      <div className={styles.giftCardInfoBottom}>
         <h2 className={styles.giftCardInfoBottom__title}>Про цей предмет</h2>
         <div>
            <ReactMarkdown children={product.description} />
         </div>
      </div>
   );
}

export default GiftCardInfoBottom;