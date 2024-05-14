import GiftCardInfoTop from "./GiftCardInfoTop";
import GiftCardInfoMain from "./GiftCardInfoMain";
import GiftCardInfoBottom from "./GiftCardInfoBottom";
import styles from "./GiftCardInfo.module.css";
import IProductColor from "../../../interfaces/IProductColor";
import React from "react";
import { productAPI } from "../../../redux/api/productAPI";

// const GiftCardInfo: React.FunctionComponent<{ productColor: IProductColor }> = ({ productColor }) => {
const GiftCardInfo: React.FunctionComponent = () => {

   // const { data: product } = productAPI.useFetchByIdQuery(productColor.productId);

   return (
      <div className={styles.giftCardInfo}>
         <GiftCardInfoTop />
         <GiftCardInfoMain />
         {/* {product && <GiftCardInfoBottom product={product} />} */}

      </div>
   );
}

export default GiftCardInfo;