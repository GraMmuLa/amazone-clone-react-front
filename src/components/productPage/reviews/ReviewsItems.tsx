import React from "react";
import ReviewsItem from "./ReviewsItem";

const ReviewsItems: React.FunctionComponent<{ reviewsInfo: Array<{ id: number,
      name: string,
      date: string,
      review: number,
      landing: boolean,
      color: string,
      size: string,
      comment: string,
      images: {id: number, data: string}[] }> }> = ({ reviewsInfo }) => {
   return (
      <div className="reviewsItems">
         {reviewsInfo.map(reviewInfo => <ReviewsItem key={reviewInfo.id} name={reviewInfo.name} date={reviewInfo.date} review={reviewInfo.review} landing={reviewInfo.landing} color={reviewInfo.color} size={reviewInfo.size} comment={reviewInfo.comment} images={reviewInfo.images} />)}
      </div>
   );
}
export default ReviewsItems;