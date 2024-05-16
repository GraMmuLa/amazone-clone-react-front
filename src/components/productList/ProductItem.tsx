import styles from "./ProductItem.module.css";
import IProduct from "../../interfaces/IProduct";
import React, {} from "react";
import {productColorAPI} from "../../redux/api/productColorAPI";
import {discountAPI} from "../../redux/api/discountAPI";
import {productColorImageAPI} from "../../redux/api/productColorImageAPI";
import {NavLink} from "react-router-dom";
import {productAPI} from "../../redux/api/productAPI";
import IProductColor from "../../interfaces/IProductColor";

const ProductItem: React.FunctionComponent<{ productColor: IProductColor }> = ({ productColor }) => {

    const {data: product} = productAPI.useFetchByIdQuery(productColor.productId);

    return (
      <div className={styles.productItem}>
          {productColor && productColor.id && productColor.mainImageId &&
              <MainImage mainImageId={productColor.mainImageId} productColorId={productColor.id}/>}

          {product && productColor && productColor.id &&
              <NavLink to={`/productPage/${productColor.id}`} className={styles.productItem__title}>
                  {product.name}
              </NavLink>
          }

          {productColor && (productColor.discountId ?
              <ProductItemPrice discountId={productColor.discountId} price={productColor.price}/> :
              <div className={styles.productItem__price}>
                  {productColor.price} грн
              </div>)
          }
      </div>
    );
}

const ProductItemPrice: React.FunctionComponent<{ discountId: number, price: number }> = ({discountId, price}) => {
    const {data: discount} = discountAPI.useFetchByIdQuery(discountId);

    const getDiscountPercent = (fullprice: number, discount: number) => {
        return Math.round(discount/(fullprice/100));
    }

    return (
        <>
            { discount &&
                <div className={`${styles.productItem__price} ${styles.discount}`}>
                    {price - discount.price} грн
                    <span>{`-${getDiscountPercent(price, discount.price)}%`}</span>
                </div>
            }
        </>
    );
}

const MainImage: React.FunctionComponent<{ mainImageId: number, productColorId: number }> = ({
                                                                                                 mainImageId,
                                                                                                 productColorId
                                                                                             }) => {

    const {data: productColorImage} = productColorImageAPI.useFetchByIdQuery(mainImageId);

    return (
        <NavLink to={`/productPage/${productColorId}`} className={styles.productItem__image}>
            {productColorImage && <img src={`data:image/jpg;base64,${productColorImage.data}`} alt="image1"/>}
        </NavLink>
    );
}

export default ProductItem;