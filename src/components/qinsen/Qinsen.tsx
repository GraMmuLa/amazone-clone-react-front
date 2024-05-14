import QinsenHeader from "./qinsenHeader/QinsenHeader";
import QinsenProducts from "./qinsenProducts/QinsenProducts";
import styles from "./Qinsen.module.css";
import titleBanner from "../../imgs/qinsen/titleBanner.jpg";
import contentImage from "../../imgs/qinsen/contentImage.jpg";
import banner from "../../imgs/qinsen/banner.jpg";


const Qinsen = () => {

   return (
      <div className={styles.qinsen}>
         <div className={styles.qinsen__titleBanner}>
            <img src={titleBanner} alt="title banner" />
         </div>
         < QinsenHeader />
         <div className="qinsenContentImage__containerMax">
            <div className={styles.qinsenContentImage}><img src={contentImage} alt="content image" /></div>
         </div>
         <div className={styles.qinsen__banner}><img src={banner} alt="banner" /></div>
         < QinsenProducts />
      </div>
   );
}

export default Qinsen;