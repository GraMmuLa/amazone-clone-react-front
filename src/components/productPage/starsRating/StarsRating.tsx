import styles from "./StarsRating.module.css";

const StarsRating = (props: { rating: number }) => {
   return (
      <div className={styles.starsRating}>
         <div style={{ width: `calc(20% * ${props.rating}) ` }} className={styles.starsRatingActive}></div>
      </div >
   );
}

export default StarsRating;