import { useParams } from "react-router";
import ProductList from "../productList/ProductList";
import StarsRating from "../productPage/starsRating/StarsRating";
import styles from "./AddReview.module.css";
import React, { useEffect, useState } from "react";
import { productColorAPI } from "../../redux/api/productColorAPI";
import cross from "../../imgs/cross.svg";
import { useAppSelector } from "../../redux/hooks/useAppSelector";
import { productReviewAPI } from "../../redux/api/productReviewAPI";
import { productReviewImageAPI } from "../../redux/api/productReviewImageAPI";

const AddReview: React.FunctionComponent = () => {
   const { productId } = useParams();
   const { data: productColors } = productColorAPI.useFetchAllQuery({});

   const { id: userId } = useAppSelector(state => state.user);
   const [quality, setQuality] = useState<number>(0);
   const [priceRatio, setPriceRatio] = useState<number>(0);
   const [deliverySpeed, setDeliverySpeed] = useState<number>(0);
   const [files, setFiles] = useState<File[]>([]);
   const [reviewText, setReviewText] = useState<string>();
   const [starsRating, setStarsRating] = useState<number>(0);

   const [addReview] = productReviewAPI.useAddMutation();
   const [addReviewImage] = productReviewImageAPI.useAddMutation();

   useEffect(() => {
      setStarsRating(Math.round(((quality + priceRatio + deliverySpeed) / 3) * 10) / 10);
   }, [quality, priceRatio, deliverySpeed]);

   const addImage = (e: React.ChangeEvent) => {
      const target = (e.target as HTMLInputElement)
      if (target.files != null && files.filter(x => x.name === target.files![0].name).length === 0)
         setFiles([...files, target.files[0]]);
   }

   //TODO
   const handleSubmit = async (e: React.FormEvent) => {
      e.preventDefault();
      console.log(userId);
      console.log(starsRating);
      console.log(productId);
      if (userId && starsRating && productId) {
         const result = await addReview({ userId: userId, mark: starsRating, reviewText: reviewText, productId: parseInt(productId) }).unwrap();
         if (result && result.id && files) {
            console.log(result.id);
            for (const file of files)
               await addReviewImage({ reviewId: result.id, data: file });
         }
      }
   }

   return (
      <main className={styles.addReview}>
         <div className={styles.addReview__container}>
            <h1 className={styles.addReview__title}>Створення відгуку</h1>
            <div className={styles.addReview__body}>
               <div className={styles.addReview__product}>
                  <div className={styles.addReview__image}>
                     <a href=""><img src="" alt="product image" /></a>
                  </div>
                  <div className={styles.addReview__text}>
                     <a href="">Жіночий кардиган-кімоно з квітковим принтом і пухкими рукавами, вільна повсякденна блузка з прикриттям</a>
                  </div>
               </div>
               <form onSubmit={(e) => handleSubmit(e)} className={styles.addReview__form}>
                  <div className={styles.addReview__totalReview}>
                     <h2 className={styles.addReview__totalFormTitle}>Загальний відгук</h2>
                     <StarsRating rating={starsRating} width={38} />
                  </div>
                  <div className={`${styles.addReview__otherReviews} ${styles.otherReviews}`}>
                     <div className={styles.otherReviews__item}>
                        <h3 className={styles.otherReviews__title}>Якість</h3>
                        <div className={styles.quality__itemsBlock}>
                           <div className={styles.quality__items}>
                              <input onChange={(e) => setQuality(parseInt(e.target.value))} className={styles.quality__input} id="quality_5" type="radio" name="qualityRating" value="5" />
                              <label className={styles.quality__label} htmlFor="quality_5"></label>
                              <input onChange={(e) => setQuality(parseInt(e.target.value))} className={styles.quality__input} id="quality_4" type="radio" name="qualityRating" value="4" />
                              <label className={styles.quality__label} htmlFor="quality_4"></label>
                              <input onChange={(e) => setQuality(parseInt(e.target.value))} className={styles.quality__input} id="quality_3" type="radio" name="qualityRating" value="3" />
                              <label className={styles.quality__label} htmlFor="quality_3"></label>
                              <input onChange={(e) => setQuality(parseInt(e.target.value))} className={styles.quality__input} id="quality_2" type="radio" name="qualityRating" value="2" />
                              <label className={styles.quality__label} htmlFor="quality_2"></label>
                              <input onChange={(e) => setQuality(parseInt(e.target.value))} className={styles.quality__input} id="quality_1" type="radio" name="qualityRating" value="1" />
                              <label className={styles.quality__label} htmlFor="quality_1"></label>
                           </div>
                        </div>
                     </div>
                     <div className={styles.otherReviews__item}>
                        <h3 className={styles.otherReviews__title}>Співвідношення до ціни</h3>
                        <div className={styles.priceRatio__itemsBlock}>
                           <div className={styles.priceRatio__items}>
                              <input onChange={(e) => setPriceRatio(parseInt(e.target.value))} className={styles.priceRatio__input} id="priceRatio_5" type="radio" name="priceRatioRating" value="5" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_5"></label>
                              <input onChange={(e) => setPriceRatio(parseInt(e.target.value))} className={styles.priceRatio__input} id="priceRatio_4" type="radio" name="priceRatioRating" value="4" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_4"></label>
                              <input onChange={(e) => setPriceRatio(parseInt(e.target.value))} className={styles.priceRatio__input} id="priceRatio_3" type="radio" name="priceRatioRating" value="3" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_3"></label>
                              <input onChange={(e) => setPriceRatio(parseInt(e.target.value))} className={styles.priceRatio__input} id="priceRatio_2" type="radio" name="priceRatioRating" value="2" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_2"></label>
                              <input onChange={(e) => setPriceRatio(parseInt(e.target.value))} className={styles.priceRatio__input} id="priceRatio_1" type="radio" name="priceRatioRating" value="1" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_1"></label>
                           </div>
                        </div>
                     </div>
                     <div className={styles.otherReviews__item}>
                        <h3 className={styles.otherReviews__title}>Швидкість доставки</h3>
                        <div className={styles.deliverySpeed__itemsBlock}>
                           <div className={styles.deliverySpeed__items}>
                              <input onChange={(e) => setDeliverySpeed(parseInt(e.target.value))} className={styles.deliverySpeed__input} id="deliverySpeed_5" type="radio" name="deliverySpeedRating" value="5" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_5"></label>
                              <input onChange={(e) => setDeliverySpeed(parseInt(e.target.value))} className={styles.deliverySpeed__input} id="deliverySpeed_4" type="radio" name="deliverySpeedRating" value="4" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_4"></label>
                              <input onChange={(e) => setDeliverySpeed(parseInt(e.target.value))} className={styles.deliverySpeed__input} id="deliverySpeed_3" type="radio" name="deliverySpeedRating" value="3" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_3"></label>
                              <input onChange={(e) => setDeliverySpeed(parseInt(e.target.value))} className={styles.deliverySpeed__input} id="deliverySpeed_2" type="radio" name="deliverySpeedRating" value="2" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_2"></label>
                              <input onChange={(e) => setDeliverySpeed(parseInt(e.target.value))} className={styles.deliverySpeed__input} id="deliverySpeed_1" type="radio" name="deliverySpeedRating" value="1" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_1"></label>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.addReview__addImage}>
                     <h2 className={styles.addReview__addImageTitle}>Додайте фото до вашого відгуку</h2>
                     <div className={styles.addReview__addImageBody}>
                        <div className={styles.addReview__addImageInputBlock}>
                           <input onChange={(e) => addImage(e)} accept=".png, .jpg, .svg, .webp" type='file' name="addReviewAddImage" />
                           <button type="button"><img src={cross} alt="cross" /></button>
                        </div>
                        {files.map(file => {
                           return (
                              <button type="button" className={styles.addReview__addImageItem}>
                                 <img key={file.name} src={URL.createObjectURL(file)} alt={"review item"} />
                              </button>
                           );
                        })}
                     </div>
                  </div>
                  <div className={styles.addReview__addComment}>
                     <label htmlFor="addReview__addComment">Коментар до відгуку</label>
                     <div><textarea value={reviewText ? reviewText : ""}
                        id="addReview__addComment"
                        placeholder="Що для вас було найцікавішим?"
                        name="addReviewComment"
                        onChange={(e) => setReviewText(e.target.value)}></textarea></div>
                  </div>
                  <button className={styles.addReview__formButton} type="submit">Надіслати відгук</button>
               </form>
            </div >
            {productColors && <ProductList itemsCount={10} />}
         </div >
      </main >
   );
}

export default AddReview;
