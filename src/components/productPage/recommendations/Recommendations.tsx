import RecommendationsItems from "./RecommendationsItems";
import styles from "./Recommendations.module.css";
import IProduct from "../../../interfaces/IProduct.js";

const Recommendations = () => {
   const product: Array<IProduct & { discount?: number }> = [
      {
         name: 'Мужская футболка с круглым...',
         description: 'lorem ipsum',
         price: 289,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         productDetailValuesIds: [],
         productReviewsIds: []
      },
      {
         name: 'Футболка с заниженными пле...',
         description: 'lorem ipsum',
         price: 260,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         discount: 30,
         productDetailValuesIds: [],
         productReviewsIds: []
      },
      {
         name: 'высокие кроссовки на толстой...',
         description: 'lorem ipsum',
         price: 700,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         productDetailValuesIds: [],
         productReviewsIds: []
      },
      {
         name: 'Мужские домашние тапочки',
         description: 'lorem ipsum',
         price: 237,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         productDetailValuesIds: [],
         productReviewsIds: []
      },
      {
         name: 'Мужские домашние тапочки',
         description: 'lorem ipsum',
         price: 237,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         productDetailValuesIds: [],
         productReviewsIds: []
      },
      {
         name: 'Мужская джинсовая куртка',
         description: 'lorem ipsum',
         price: 1362,
         productTypeId: 11111,
         productColorsIds: [4, 5, 6],
         productDetailValuesIds: [],
         productReviewsIds: []
      }
   ]
   return (
      <div className={styles.recommendations}>
         <div className="recommendations__containerMax">
            <h2 className={styles.recommendations__title}>Клієнти також переглядали</h2>
            <RecommendationsItems products={product} />
         </div>
      </div>
   );
}

export default Recommendations;