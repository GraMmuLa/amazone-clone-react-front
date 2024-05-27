import styles from "./StarsRating.module.css";

const StarsRating = (props: { rating: number, width?: any }) => {
   return (
      <div style={props.width ? { height: props.width - 2, width: props.width ? props.width * 5 : 24 * 5, backgroundSize: `${props.width}px ${props.width - 2}px` } : {}} className={styles.starsRating}>
         <div style={props.width ? { width: `calc(20% * ${props.rating}) `, backgroundSize: `${props.width}px ${props.width - 2}px` } : { width: `calc(20% * ${props.rating}) ` }} className={styles.starsRatingActive}></div>
      </div >
   );
}

export default StarsRating;