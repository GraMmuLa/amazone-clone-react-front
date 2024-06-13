import React from "react";
import styles from "./SellerPageProductsItems.module.css";
import IProduct from "../../../interfaces/IProduct";
import {productColorAPI} from "../../../redux/api/productColorAPI";
import {productColorImageAPI} from "../../../redux/api/productColorImageAPI";
import {NavLink} from "react-router-dom";
import {discountAPI} from "../../../redux/api/discountAPI";


const SellerPageProductsItems: React.FunctionComponent<{ products: IProduct[] }> = ({ products }) => {

   return (
      <div className={styles.qinsenProductsItems}>
         {products.map(product => product.id && <SellerPageProductsItem key={product.id} productId={product.id} productName={product.name} />)}
      </div>
   );
}

const SellerPageProductsItem:React.FunctionComponent<{productId: number, productName: string}> = ({productId, productName}) => {

   const {data: productColors} = productColorAPI.useFetchAllByProductQuery(productId);

   const MainImage: React.FunctionComponent<{ imageId: number, productColorId: number }> =
       ({imageId, productColorId}) => {

      const {data: image} = productColorImageAPI.useFetchByIdQuery(imageId);

      return (
          <>
             {image &&
                 <div className={styles.qinsenProductsItem__image}>
                    <NavLink to={`/productPage/${productColorId}`}><img src={`data:image/jpg;base64,${image.data}`} alt="product image"/></NavLink>
                </div>
             }
          </>
      );
   }

   const DiscountPrice: React.FunctionComponent<{price: number, discountId: number}> = ({price, discountId}) => {

      const {data: discount} = discountAPI.useFetchByIdQuery(discountId);

      return (
          <>
             {discount &&
                 <div className={`${styles.qinsenProductsItem__price} ${styles._discount}`}>
                    {price-discount.price} грн
                 </div>
             }
          </>
      );
   }

   return (
      <>
         {productColors &&
            productColors.map(productColor => productColor.mainImageId && productColor.id && (
               <div key={productColor.id} className={styles.qinsenProductsItem}>
                  <MainImage productColorId={productColor.id} imageId={productColor.mainImageId}/>
                  <div className={styles.qinsenProductsItem__title}><NavLink to={`/productPage/${productColor.id}`}>{productName}</NavLink></div>
                  {productColor.discountId ?
                     <DiscountPrice price={productColor.price} discountId={productColor.discountId}/> :
                     <div className={`${styles.qinsenProductsItem__price}`}>
                        {productColor.price} грн
                     </div>
                  }
               </div>
         ))}
      </>

   );
}

export default SellerPageProductsItems;