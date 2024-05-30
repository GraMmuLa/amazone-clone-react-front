import styles from "./BasketItem.module.css";
import React, {Dispatch, useEffect, useState} from "react";
import basketDelete from "../../imgs/basketDelete.svg";
import {NavLink, useNavigate} from "react-router-dom";
import {productColorImageAPI} from "../../redux/api/productColorImageAPI";
import {productAPI} from "../../redux/api/productAPI";
import {discountAPI} from "../../redux/api/discountAPI";
import {colorAPI} from "../../redux/api/colorAPI";
import IProductColor from "../../interfaces/IProductColor";
import {jwtDecode} from "jwt-decode";
import {init} from "../../redux/slices/userSlice";
import {useAppDispatch} from "../../redux/hooks/useAppDispatch";
import {useAppSelector} from "../../redux/hooks/useAppSelector";

const BasketItem: React.FunctionComponent<{ removeProductColor: Function,
   priceSum: number,
   setPriceSum: Dispatch<React.SetStateAction<number>>,
   allCheck: boolean,
   productColor: IProductColor,
   productColorsState: IProductColor[],
   setProductColorsState: Dispatch<React.SetStateAction<IProductColor[]>>}> = ({ removeProductColor,
                                                                               priceSum,
                                                                               setPriceSum,
                                                                               allCheck,
                                                                               productColor,
                                                                               productColorsState,
                                                                               setProductColorsState }) => {

   const [isChecked, setIsChecked] = useState<boolean>(true);
   const [price, setPrice] = useState<number>(productColor.price);

   const [fetchDiscount] = discountAPI.useLazyFetchByIdQuery();

   const authToken = sessionStorage.getItem("auth_token");

   const navigate = useNavigate();

   const dispatch = useAppDispatch();
   const {id: userId} = useAppSelector(state=>state.user);

   useEffect(() => {
      if(productColor.discountId) {
         fetchDiscount(productColor.discountId)
             .unwrap()
             .then(data=> {
                   setPrice(productColor.price-data.price);
             });
      }
   }, []);

   useEffect(() => {
      if(!isChecked)
         setPriceSum(priceSum-price);
      if(isChecked)
         setPriceSum(priceSum+price);
   }, [isChecked]);

   useEffect(() => {
      if(allCheck)
         setIsChecked(false);
      else
         setIsChecked(true);
   }, [allCheck]);

   const handleDeleteButtonClick = async () => {
      if (authToken === null)
         navigate("/");
      else {
         const decodedJwt = jwtDecode(authToken);
         const validityFrom = decodedJwt.iat;
         const validityTo = decodedJwt.exp;
         if (productColor.id && userId && validityFrom && validityTo) {
            const jwtResponse = await removeProductColor({ userId, productColorId: productColor.id, validityFrom, validityTo }).unwrap();
            setProductColorsState(productColorsState.filter(x=>x.id !== productColor.id));
            dispatch(init(jwtResponse));
         }
      }
   }

   const Image: React.FunctionComponent<{mainImageId: number}> = ({ mainImageId }) => {
      const {data: image} = productColorImageAPI.useFetchByIdQuery(mainImageId);

      return (
          <>
             {image && productColor.id &&
                 <div className={styles.basketItem__image}>
                    <NavLink to={`/productPage/${productColor.id}`}><img src={`data:image/jpg;base64,${image.data}`}
                                                                        alt="productColor image"/></NavLink>
                 </div>
             }
          </>
      );
   }

   const ProductLink: React.FunctionComponent<{ productId: number }> = ({ productId }) => {

      const {data: product} = productAPI.useFetchByIdQuery(productId);

      return (
          <>
             {product && productColor.id &&
                 <NavLink to={`/productPage/${productColor.id}`} className={styles.basketItem__title}>{product.name}</NavLink>
             }
          </>
      );
   }

   const ColorInfo: React.FunctionComponent<{colorId: number}> = ({colorId})=> {

      const {data: color} = colorAPI.useFetchByIdQuery(colorId);

      return (
          <>
             {color &&
                 <div className={styles.basketItem__info}>{color.color}</div>
             }
          </>
      );
   }

   return (
       <>
          {productColor.id &&
              <li className={styles.basketItem}>
                 <div className={styles.basketItemCheckBlock}>
                    <input checked={isChecked} onChange={(e)=>e.target.checked ? setIsChecked(true) : setIsChecked(false)} id={`product_${productColor.id}`} type="checkbox"/>
                    <label className={styles.basketItemLabel} htmlFor={`product_${productColor.id}`}></label>
                 </div>
                 <div className={styles.basketItem__body}>
                    {productColor.mainImageId && <Image mainImageId={productColor.mainImageId}/>}
                    <div className={styles.basketItem__content}>
                       <ProductLink productId={productColor.productId}/>
                        <ColorInfo colorId={productColor.colorId}/>
                       {productColor.discountId ?
                          <div className={`${styles.basketItem__price} ${styles.discount}`}>{price} грн</div> :
                          <div className={styles.basketItem__price}>{price} грн</div>
                       }
                       <div className={styles.basketItem__bottom}>
                          <button onClick={()=>handleDeleteButtonClick()} className={styles.basketItem__delete}><img src={basketDelete} alt="delete"/></button>
                       </div>
                    </div>
                 </div>
              </li>
          }
       </>
   );
}

export default BasketItem;
