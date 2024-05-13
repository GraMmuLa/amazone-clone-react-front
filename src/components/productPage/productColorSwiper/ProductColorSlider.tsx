import React, { useEffect, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import styles from "./ProductSlider.module.css";
import { Swiper as SwiperType } from 'swiper';
import IProductColorImage from "../../../interfaces/IProductColorImage";
import { userAPI } from "../../../redux/api/userAPI";
import { useAppSelector } from "../../../redux/hooks/useAppSelector";
import { useParams } from "react-router";
import { useAppDispatch } from "../../../redux/hooks/useAppDispatch";
import { userSlice } from "../../../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const ProductColorSlider: React.FunctionComponent<{ productColorImages: IProductColorImage[] }> = ({ productColorImages }) => {
    const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

    const [addFavouriteProductColor] = userAPI.useAddFavouriteProductColorMutation();
    const [deleteFavouriteProductColor] = userAPI.useDeleteFavouriteProductColorMutation();

    const { productColorId } = useParams();

    const { id: userId, favouriteProductColorIds } = useAppSelector(state => state.user);
    const dispatch = useAppDispatch();
    const { init } = userSlice.actions;

    const navigate = useNavigate();

    const authToken = sessionStorage.getItem("auth_token");

    const handleAddButtonClick = async () => {
        if (authToken === null)
            navigate("/")
        else {
            const decodedJwt = jwtDecode(authToken);
            const validityFrom = decodedJwt.iat;
            const validityTo = decodedJwt.exp;
            if (productColorId && userId && validityFrom && validityTo) {
                const jwtResponse = await addFavouriteProductColor({ userId, productColorId: parseInt(productColorId), validityFrom, validityTo }).unwrap();
                dispatch(init(jwtResponse));
            }
        }
    }

    const handleDeleteButtonClick = async () => {
        if (authToken === null)
            navigate("/")
        else {
            const decodedJwt = jwtDecode(authToken);
            const validityFrom = decodedJwt.iat;
            const validityTo = decodedJwt.exp;
            if (productColorId && userId && validityFrom && validityTo) {
                const jwtResponse = await deleteFavouriteProductColor({ userId, productColorId: parseInt(productColorId), validityFrom, validityTo }).unwrap();
                dispatch(init(jwtResponse));
            }
        }
    }

    return (
        <div className={styles.productSlider}>
            <Swiper
                id={styles.subProductSlider}
                className="subProductSlider"
                modules={[Thumbs]}
                watchSlidesProgress
                onSwiper={setThumbsSwiper}
                spaceBetween={10}
                slidesPerView={5}
                loop={true}
                freeMode={true}
                direction='vertical'
            >
                {productColorImages.map(productColorImage => <SwiperSlide key={productColorImage.id}><img src={`data:image/jpg;base64,${productColorImage.data}`} alt={`data:image/jpg;base64,${productColorImage.data}`} /></SwiperSlide>)}
            </Swiper>
            <div>
                <Swiper
                    id='mainProductSlider'
                    className={styles.mainProductSlider}
                    modules={[Thumbs]}
                    thumbs={{ swiper: thumbsSwiper }}
                    spaceBetween={50}
                    slidesPerView={1}
                    loop={true}
                >
                    {productColorImages.map(productColorImage => <SwiperSlide key={productColorImage.id}><img src={`data:image/jpg;base64,${productColorImage.data}`} alt={`data:image/jpg;base64,${productColorImage.data}`} /></SwiperSlide>)}
                </Swiper>
                {productColorId && favouriteProductColorIds &&
                    (favouriteProductColorIds.includes(parseInt(productColorId)) ?
                        <button onClick={() => handleDeleteButtonClick()} className={styles.productSliderLink}>Видалити з кошика</button> :
                        <button onClick={() => handleAddButtonClick()} className={styles.productSliderLink}>Додати до кошика</button>
                    )
                }
            </div>
        </div>
    );
}

export default ProductColorSlider;
