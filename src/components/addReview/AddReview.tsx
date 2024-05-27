import { useParams } from "react-router";
import ProductList from "../productList/ProductList";
import StarsRating from "../productPage/starsRating/StarsRating";
import styles from "./AddReview.module.css";
import React, { useState } from "react";
import { productColorAPI } from "../../redux/api/productColorAPI";

const AddReview: React.FunctionComponent = () => {
   const { productColorId } = useParams<{ productColorId: string }>();
   const { data: productColors } = productColorAPI.useFetchAllQuery({});

   const [quality, setQuality] = useState<string>("");
   const [priceRatio, setPriceRatio] = useState<string>("");
   const [deliverySpeed, setDeliverySpeed] = useState<string>("");

   let qualityNum = +quality;
   let priceRatioNum = +priceRatio;
   let deliverySpeedNum = +deliverySpeed;

   return (
      <main className={styles.addReview}>
         <div className={styles.addReview__container}>
            <h1 className={styles.addReview__title}>Створення відгуку</h1>
            <div className={styles.addReview__body}>
               <div className={styles.addReview__product}>
                  <div className={styles.addReview__image}>
                     <a href=""><img src="" alt="product image" /></a>
                  </div>
                  <div className={styles.addReview__text}><a href="">Жіночий кардиган-кімоно з квітковим принтом і пухкими рукавами, вільна повсякденна блузка з прикриттям</a></div>
               </div>
               <form action="" className={styles.addReview__form}>
                  <div className={styles.addReview__totalReview}>
                     <h2 className={styles.addReview__totalFormTitle}>Загальний відгук</h2>
                     <StarsRating rating={(qualityNum + priceRatioNum + deliverySpeedNum) / 3} width={38} />
                  </div>
                  <div className={`${styles.addReview__otherReviews} ${styles.otherReviews}`}>
                     <div className={styles.otherReviews__item}>
                        <h3 className={styles.otherReviews__title}>Якість</h3>
                        <div className={styles.quality__itemsBlock}>
                           <div className={styles.quality__items}>
                              <input onChange={(e) => setQuality(e.target.value)} className={styles.quality__input} id="quality_5" type="radio" name="qualityRating" value="5" />
                              <label className={styles.quality__label} htmlFor="quality_5"></label>
                              <input onChange={(e) => setQuality(e.target.value)} className={styles.quality__input} id="quality_4" type="radio" name="qualityRating" value="4" />
                              <label className={styles.quality__label} htmlFor="quality_4"></label>
                              <input onChange={(e) => setQuality(e.target.value)} className={styles.quality__input} id="quality_3" type="radio" name="qualityRating" value="3" />
                              <label className={styles.quality__label} htmlFor="quality_3"></label>
                              <input onChange={(e) => setQuality(e.target.value)} className={styles.quality__input} id="quality_2" type="radio" name="qualityRating" value="2" />
                              <label className={styles.quality__label} htmlFor="quality_2"></label>
                              <input onChange={(e) => setQuality(e.target.value)} className={styles.quality__input} id="quality_1" type="radio" name="qualityRating" value="1" />
                              <label className={styles.quality__label} htmlFor="quality_1"></label>
                           </div>
                        </div>
                     </div>
                     <div className={styles.otherReviews__item}>
                        <h3 className={styles.otherReviews__title}>Співвідношення до ціни</h3>
                        <div className={styles.priceRatio__itemsBlock}>
                           <div className={styles.priceRatio__items}>
                              <input onChange={(e) => setPriceRatio(e.target.value)} className={styles.priceRatio__input} id="priceRatio_5" type="radio" name="priceRatioRating" value="5" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_5"></label>
                              <input onChange={(e) => setPriceRatio(e.target.value)} className={styles.priceRatio__input} id="priceRatio_4" type="radio" name="priceRatioRating" value="4" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_4"></label>
                              <input onChange={(e) => setPriceRatio(e.target.value)} className={styles.priceRatio__input} id="priceRatio_3" type="radio" name="priceRatioRating" value="3" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_3"></label>
                              <input onChange={(e) => setPriceRatio(e.target.value)} className={styles.priceRatio__input} id="priceRatio_2" type="radio" name="priceRatioRating" value="2" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_2"></label>
                              <input onChange={(e) => setPriceRatio(e.target.value)} className={styles.priceRatio__input} id="priceRatio_1" type="radio" name="priceRatioRating" value="1" />
                              <label className={styles.priceRatio__label} htmlFor="priceRatio_1"></label>
                           </div>
                        </div>
                     </div>
                     <div className={styles.otherReviews__item}>
                        <h3 className={styles.otherReviews__title}>Швидкість доставки</h3>
                        <div className={styles.deliverySpeed__itemsBlock}>
                           <div className={styles.deliverySpeed__items}>
                              <input onChange={(e) => setDeliverySpeed(e.target.value)} className={styles.deliverySpeed__input} id="deliverySpeed_5" type="radio" name="deliverySpeedRating" value="5" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_5"></label>
                              <input onChange={(e) => setDeliverySpeed(e.target.value)} className={styles.deliverySpeed__input} id="deliverySpeed_4" type="radio" name="deliverySpeedRating" value="4" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_4"></label>
                              <input onChange={(e) => setDeliverySpeed(e.target.value)} className={styles.deliverySpeed__input} id="deliverySpeed_3" type="radio" name="deliverySpeedRating" value="3" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_3"></label>
                              <input onChange={(e) => setDeliverySpeed(e.target.value)} className={styles.deliverySpeed__input} id="deliverySpeed_2" type="radio" name="deliverySpeedRating" value="2" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_2"></label>
                              <input onChange={(e) => setDeliverySpeed(e.target.value)} className={styles.deliverySpeed__input} id="deliverySpeed_1" type="radio" name="deliverySpeedRating" value="1" />
                              <label className={styles.deliverySpeed__label} htmlFor="deliverySpeed_1"></label>
                           </div>
                        </div>
                     </div>
                  </div>
                  <div className={styles.addReview__addImage}>
                     <label htmlFor="addReview__addImageLabel">Додайте фото до вашого відгуку</label>
                     <input id="addReview__addImageInput" accept=".png, .jpg, .svg, .webp" type='file' name="addReviewAddImage" />
                  </div>
                  <div className={styles.addReview__addComment}>
                     <label htmlFor="addReview__addComment">Коментар до відгуку</label>
                     <div><textarea id="addReview__addComment" placeholder="Що для вас було найцікавішим?" name="addReviewComment"></textarea></div>
                  </div>
                  <button type="submit">Надіслати відгук</button>
               </form>
            </div >
            {productColors && <ProductList productColors={productColors} />}
         </div >
      </main >
   );
}

export default AddReview;
