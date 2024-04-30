import ProductsPageBodyCardList from "./ProductsPageBodyCardList";
import styles from "./ProductsPageBody.module.css";
import IProduct from '../../interfaces/IProduct'


const ProductsPageBody = () => {
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
      <div className={styles.bodyMain}>
         <ProductsPageBodyCardList products={product} />
      </div>
   );
}

export default ProductsPageBody;