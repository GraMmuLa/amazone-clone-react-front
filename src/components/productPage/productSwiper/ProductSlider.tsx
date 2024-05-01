import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Thumbs } from 'swiper/modules';
import 'swiper/css';
import productImg1 from '../../../imgs/product/swiper1.jpg'
import productImg2 from '../../../imgs/product/swiper2.jpg'
import productImg3 from '../../../imgs/product/swiper3.jpg'
import productImg4 from '../../../imgs/product/swiper4.jpg'
import productImg5 from '../../../imgs/product/swiper5.jpg'
import styles from "./ProductSlider.module.css";
import { Swiper as SwiperType } from 'swiper';

const ProductSlider = () => {
   const [thumbsSwiper, setThumbsSwiper] = useState<SwiperType | null>(null);

   const sliderImages = [
      {
         imageUrl: productImg1,
      },
      {
         imageUrl: productImg2,
      },
      {
         imageUrl: productImg3,
      },
      {
         imageUrl: productImg4,
      },
      {
         imageUrl: productImg5,
      },
   ]

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
            {sliderImages.map(sliderImage => <SwiperSlide><img src={sliderImage.imageUrl} alt={sliderImage.imageUrl} /></SwiperSlide>)}
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
               {sliderImages.map(sliderImage => <SwiperSlide><img src={sliderImage.imageUrl} alt={sliderImage.imageUrl} /></SwiperSlide>)}
            </Swiper>
            <a href="" className={styles.productSliderLink}>Додати до кошика</a>
         </div>
      </div>
   );
}

export default ProductSlider;
