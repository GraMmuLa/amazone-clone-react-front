import SellerHeader from "./sellerPageHeader/SellerHeader";
import SellerPageProducts from "./sellerPageProducts/SellerPageProducts";
import styles from "./SellerPage.module.css";
import titleBanner from "../../imgs/qinsen/titleBanner.jpg";
import contentImage from "../../imgs/qinsen/contentImage.jpg";
import banner from "../../imgs/qinsen/banner.jpg";
import React from "react";


const SellerPage: React.FunctionComponent = () => {

   return (
      <div className={styles.qinsen}>
         <div className={styles.qinsen__titleBanner}>
            <img src={titleBanner} alt="title banner" />
         </div>
         < SellerHeader />
         <div className="qinsenContentImage__containerMax">
            <div className={styles.qinsenContentImage}><img src={contentImage} alt="content image" /></div>
         </div>
         <div className={styles.qinsen__banner}><img src={banner} alt="banner" /></div>
         < SellerPageProducts />
      </div>
   );
}

export default SellerPage;