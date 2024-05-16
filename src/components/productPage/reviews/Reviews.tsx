import styles from "./Reviews.module.css";
import ReviewsItems from "./ReviewsItems";


const Reviews = () => {
   const reviewsInfo = [
      {
         id: 1,
         name: "a***7",
         date: "7 Jun,2023",
         review: 5,
         landing: true,
         color: "сірий",
         size: "S",
         comment: "Товар якісний і зручний",
         images: [{id: 1, data: "img/image1"}, {id: 2, data: "img/image2"}]
      },
      {
         id: 2,
         name: "u***4",
         date: "7 Jun,2023",
         review: 2.5,
         landing: false,
         color: "сірий",
         size: "S",
         comment: "Якість продукту: для мене погано. Відповідність зображенням продукту: так. Опис запаху: поганий матеріал, не такий, як я очікував, тонкий і дешевий",
         images: [{id: 1, data: "img/image3"}]
      },
   ]

   // const reviews = reviewsInfo.map(item => item.review);

   return (
      <div className={styles.reviews}>
         <div className="reviews__containerMax">
            <h2 className={styles.reviews__title}>Відгуки</h2>
            <ReviewsItems reviewsInfo={reviewsInfo} />
         </div>
      </div>
   );
}
export default Reviews;