import React from "react";
import styles from "./GiftCardsListItem.module.css";
import IProductCardDesign from "../../interfaces/IProductCardDesign";
import {productCardDesignImageAPI} from "../../redux/api/productCardDesignImageAPI";
import {NavLink} from "react-router-dom";
import giftCards from "../giftCards/GiftCards";


const GiftCardsListItem: React.FunctionComponent<{giftCardDesign: IProductCardDesign}> = ({ giftCardDesign }) => {

    const Image: React.FunctionComponent<{imageId: number}> = ({imageId}) => {

        const {data: image} = productCardDesignImageAPI.useFetchByIdQuery(imageId);

        return (
            <>
                {image && giftCardDesign.id &&
                    <div className={styles.giftCardsListItem__image}>
                        <NavLink to={`/giftCard/${giftCardDesign.id}`}><img src={`data:image/jpg;base64,${image.data}`} alt={"gift card"}/></NavLink>
                    </div>
                }
            </>
        );
    }

    return (
        <div className={styles.giftCardsListItem}>
            { giftCardDesign.productCardDesignImageId &&
                <Image imageId={giftCardDesign.productCardDesignImageId}/> }
            <div className={styles.giftCardsListItem__text}>
                <NavLink to={`/giftCard/${giftCardDesign.id}`}>{giftCardDesign.name}</NavLink>
            </div>
            <div className={styles.giftCardsListItem__price}>
                {50} - ... грн
            </div>
    </div>
   );
}

export default GiftCardsListItem;