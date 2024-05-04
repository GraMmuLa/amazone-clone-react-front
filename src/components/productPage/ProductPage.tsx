import Header from "../header/Header";
import Footer from "../footer/Footer";
import ProductBlock from "./productBlock/ProductBlock";
import Reviews from "./reviews/Reviews";
import Recommendations from "./recommendations/Recommendations";
import styles from "./ProductPage.module.css";

const ProductPage = () => {
   return (
      <>
         <Header />
         <main className={styles.productPage}>
            <ProductBlock />
            <Reviews />
            <Recommendations />
         </main>
         <Footer />
      </>
   );
}

export default ProductPage;