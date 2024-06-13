import GiftCardInfo from "../giftCardInfo/GiftCardInfo";
import styles from "./GiftCardBlock.module.css";
import React, {useEffect} from "react";
import {productCardDesignImageAPI} from "../../../redux/api/productCardDesignImageAPI";
import {productCardDesignAPI} from "../../../redux/api/productCardDesignAPI";
import {productCardAPI} from "../../../redux/api/productCardAPI";
import {useAppSelector} from "../../../redux/hooks/useAppSelector";
import {useAppDispatch} from "../../../redux/hooks/useAppDispatch";
import {productCardSlice} from "../../../redux/slices/productCardSlice";

const GiftCardBlock: React.FunctionComponent<{productCardDesignId: number, isOrdered: boolean, setIsOrdered: React.Dispatch<React.SetStateAction<boolean>>}> = ({productCardDesignId, isOrdered, setIsOrdered}) => {

   const { data: productCardDesign } = productCardDesignAPI.useFetchByIdQuery(productCardDesignId);

   const dispatch = useAppDispatch();
   const {setProductCardDesignId} = productCardSlice.actions;

   useEffect(() => {
      dispatch(setProductCardDesignId(productCardDesignId));
   }, [productCardDesignId]);

   const [addProductCard] = productCardAPI.useAddMutation();

   const productCard = useAppSelector(state=>state.productCard);

   const handleButton = async (e: React.MouseEvent) => {
      if(productCard &&
          productCard.price &&
          productCard.fromWho &&
          productCard.email &&
          productCard.productCardDesignId) {
         const result = await addProductCard(productCard).unwrap();
         if(result)
            setIsOrdered(true);
      }
   }

   const Image: React.FunctionComponent<{imageId: number}> = ({imageId}) => {

      const {data: image} = productCardDesignImageAPI.useFetchByIdQuery(imageId);

      return (
          <>
             {image &&
              <div className={styles.giftCardBlock__cardImage}>
                 <img src={`data:image/jpg;base64,${image.data}`} alt="gift card"/>
              </div>
             }
          </>
      );
   }

   return (
       <>
          {productCardDesign &&
           <div className={styles.giftCardBlock}>
              <div className="giftCardBlock__container">
                 <div className={styles.giftCardBlock__wrapper}>
                    <div className={styles.giftCardBlock__cardImageWrapper}>
                       { productCardDesign.productCardDesignImageId &&
                           <Image imageId={productCardDesign.productCardDesignImageId}/> }
                       <button className={styles.giftCardLink} onClick={(e)=>handleButton(e)}>Замовити</button>
                    </div>
                    <GiftCardInfo/>
                 </div>
              </div>
           </div>
          }
       </>
   );
}


export default GiftCardBlock;