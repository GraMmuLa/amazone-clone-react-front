import SellerHeader from "./sellerPageHeader/SellerHeader";
import SellerPageProducts from "./sellerPageProducts/SellerPageProducts";
import styles from "./SellerPage.module.css";
import contentImage from "../../imgs/qinsen/contentImage.jpg";
import banner from "../../imgs/qinsen/banner.jpg";
import React from "react";
import { useParams } from "react-router";
import { bannerAPI } from "../../redux/api/bannerAPI";


const SellerPage: React.FunctionComponent = () => {

    const { sellerId } = useParams();

    return (
        <>
            {sellerId &&
                <main className={styles.qinsen}>
                    <Banner userId={parseInt(sellerId)} />
                    <SellerHeader userId={parseInt(sellerId)} />
                    <div className="qinsenContentImage__containerMax">
                        <div className={styles.qinsenContentImage}><img src={contentImage} alt="content image" /></div>
                    </div>
                    <div className={styles.qinsen__banner}><img src={banner} alt="banner" /></div>
                    <SellerPageProducts userId={parseInt(sellerId)} />
                </main>
            }
        </>
    );
}

const Banner: React.FunctionComponent<{ userId: number }> = ({ userId }) => {

    const { data: banner } = bannerAPI.useFetchByUserQuery(userId);

    return (
        <>
            {banner &&
                <div className={styles.qinsen__titleBanner}>
                    <img src={`data:image/jpg;base64,${banner.data}`} alt="title banner" />
                </div>
            }
        </>
    );
}

export default SellerPage;