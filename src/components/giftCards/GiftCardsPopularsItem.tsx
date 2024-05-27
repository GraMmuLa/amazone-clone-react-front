import styles from "./GiftCardsPopularsItem.module.css";
import React from "react";
import IProductCardDesign from "../../interfaces/IProductCardDesign";
import {productCardDesignImageAPI} from "../../redux/api/productCardDesignImageAPI";
import {NavLink} from "react-router-dom";


const GiftCardsPopularsItem: React.FunctionComponent<{ productCardDesign: IProductCardDesign }> = ({ productCardDesign }) => {

    const Image: React.FunctionComponent<{imageId: number}> = ({imageId}) => {

        const {data: image} = productCardDesignImageAPI.useFetchByIdQuery(imageId);

        return (
            <>
                {image &&
                    <div className={styles.giftCardsPopularsItem__image}>
                        <NavLink to={`/giftCard/${productCardDesign.id}`}>
                            <img src={`data:image/jpg;base64,${image.data}`} alt="gift card"/>
                        </NavLink>
                    </div>
                }
            </>

        );
    }

    return (
        <>
            {productCardDesign.id &&
                <div className={styles.giftCardsPopularsItem}>
                    {productCardDesign.productCardDesignImageId &&
                        <Image imageId={productCardDesign.productCardDesignImageId}/>}
                    <div className={styles.giftCardsPopularsItem__box}>
                        <div className={styles.giftCardsPopularsItem__block}></div>
                        <div className={styles.giftCardsPopularsItem__UAH}>₴</div>
                    </div>

                    <NavLink to={`/giftCard/${productCardDesign.id}`} className={styles.giftCardsPopularsItem__title}>
                        {productCardDesign.name}
                    </NavLink>

                    <div className={styles.giftCardsPopularsItem__price}>50 грн</div>
                </div>
            }
        </>
    );
}

export default GiftCardsPopularsItem;