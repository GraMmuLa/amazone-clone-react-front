import React from "react";
import StarsRating from "../starsRating/StarsRating"
import styles from "./ReviewsItem.module.css";


const ReviewsItem: React.FunctionComponent<{ name: string, date: string, review: number, landing: boolean, color: string, size: string, comment: string, images: {id: number, data: string}[] }> = ({ name, date, review, landing, color, size, comment, images }) => {
   return (
      <div className={styles.reviewsItem} >
         <div className={styles.reviewsItem__top}>
            <div className={styles.reviewsItem__name}>{name}</div>
            <div className={styles.reviewsItem__date}>{date}</div>
         </div>
         <div className={styles.reviewsItem__ratingWrapper}>
            <StarsRating rating={review} />
         </div>
         <div className={styles.reviewsItem__info}>
            <div className={styles.reviewsItem__landing}>
               Загальна посадка: <span>{landing ? "Відповідає розміру" : "Не відповідає розміру"}</span>
            </div>
            <div className={styles.reviewsItem__color}>
               Колір: <span>{color}</span>
            </div>
            <div className={styles.reviewsItem__size}>
               Розмір: <span>{size}</span>
            </div>
         </div>
         <div className={styles.reviewsItem__comment}>{comment}</div>
         <div className={styles.reviewsItem__imageBlock}>
            {images.map(image => <div key={image.id} className={styles.reviewsItem__image}><button><img src={image.data} alt={image.data} /></button></div>)}
         </div>
      </div>
   );
}

export default ReviewsItem;