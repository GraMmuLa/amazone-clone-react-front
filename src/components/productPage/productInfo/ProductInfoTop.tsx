import StarsRating from "../starsRating/StarsRating";
import styles from "./ProductInfoTop.module.css";
import React from "react";
import IProductColor from "../../../interfaces/IProductColor";
import {NavLink} from "react-router-dom";
import {userAPI} from "../../../redux/api/userAPI";

const ProductInfoTop: React.FunctionComponent<{productName: string, userId: number}> = ({productName, userId}) => {

    const {data: user} = userAPI.useFetchByIdQuery(userId);

    // TODO rating
   const ratingValue = 4.4;
   return (
      <div className={styles.productInfoTop}>
          { user && <NavLink to={`/sellerPage/${userId}`} className={styles.productInfoTop__link}>Відвідайте магазин {user.username}</NavLink> }
         <h2 className={styles.productInfoTop__title}>{productName}</h2>
         <div className={styles.productInfoTop__ratingBlock}>
            <div className={styles.productInfoTop__ratingWrapper}>
               <div className={styles.productInfoTop__value}>{ratingValue}</div>
               <StarsRating rating={ratingValue} />
            </div>
            <div className={styles.productInfoTop__count}>Оцінок: <span>61 237</span></div>
         </div>
      </div>
   );
}

export default ProductInfoTop;