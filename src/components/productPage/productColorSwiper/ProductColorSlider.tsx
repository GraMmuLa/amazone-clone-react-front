import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import styles from "./ProductSlider.module.css";
import { Swiper as SwiperType } from 'swiper';
import IProductColorImage from "../../../interfaces/IProductColorImage";

const ProductColorSlider: React.FunctionComponent<{productColorImages: IProductColorImage[]}> = ({productColorImages}) => {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

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
               modules={[Thumbs]}
               thumbs={{ swiper: thumbsSwiper }}
               spaceBetween={50}
               slidesPerView={1}
               loop={true}
            >
                {productColorImages.map(productColorImage => <SwiperSlide key={productColorImage.id}><img src={`data:image/jpg;base64,${productColorImage.data}`} alt={`data:image/jpg;base64,${productColorImage.data}`} /></SwiperSlide>)}
            </Swiper>
            <a href="" className={styles.productSliderLink}>Додати до кошика</a>
         </div>
      </div>
   );
}

export default ProductColorSlider;
