import styles from "./RecommendationsItem.module.css";
import IProduct from "../../interfaces/IProduct";
import React, {useEffect} from "react";
import {productColorAPI} from "../../redux/api/productColorAPI";
import {discountAPI} from "../../redux/api/discountAPI";
import {productColorImageAPI} from "../../redux/api/productColorImageAPI";
import {NavLink} from "react-router-dom";

const RecommendationsItem: React.FunctionComponent<{ product: IProduct }> = ({ product }) => {

    const {data: productColor} = productColorAPI.useFetchByIdQuery(product.productColorsIds![0]);

    return (
      <div className={styles.recommendationsItem}>
          {productColor && productColor.id && productColor.mainImageId &&
              <MainImage mainImageId={productColor.mainImageId} productColorId={productColor.id}/>}

          {productColor && productColor.id &&
              <NavLink to={`/productPage/${productColor.id}`} className={styles.recommendationsItem__title}>
                  {product.name}
              </NavLink>
          }

          { productColor &&
              (productColor.discountId ?
              <RecommendationsItemPrice discountId={productColor.discountId} price={productColor.price}/> :
              <div
                  className={styles.recommendationsItem__price}>{productColor.price} грн
              </div>)
          }
      </div>
   );
}

const RecommendationsItemPrice: React.FunctionComponent<{discountId: number, price: number}> = ({discountId, price}) => {
    const {data: discount} = discountAPI.useFetchByIdQuery(discountId);

    const getDiscountPercent = (fullprice: number, discount: number) => {
        return Math.round(discount/(fullprice/100));
    }

    return (
        <>
            { discount &&
                <div className={`${styles.recommendationsItem__price} ${styles.discount}`}>
                    {price} грн
                    {discount && <span>{`-${getDiscountPercent(price, discount.price)}%`}</span>}
                </div>
            }
        </>
    );
}

const MainImage: React.FunctionComponent<{mainImageId: number, productColorId: number}> = ({mainImageId, productColorId}) => {

    const {data: productColorImage} = productColorImageAPI.useFetchByIdQuery(mainImageId);

    return (
        <NavLink to={`/productPage/${productColorId}`} className={styles.recommendationsItem__image}>
            {productColorImage && <img src={`data:image/jpg;base64,${productColorImage.data}`} alt="image1"/>}
        </NavLink>
    );
}

export default RecommendationsItem;