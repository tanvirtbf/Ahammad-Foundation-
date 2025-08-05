import { A11y, Navigation, Pagination, Scrollbar } from "swiper/modules";

import styles from "./Slider.module.css";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SingleSlider from "./SingleSlider";

const Slider = () => {
  return (
    <>
      <div className={styles.heading}>
        <h2>আমাদের কার্যক্রম</h2>
      </div>
      <div className={`${styles.main} container`}>
        <Swiper
          // install Swiper modules
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 2,
            },
            768: {
              width: 768,
              slidesPerView: 3,
            },
          }}
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={30}
          slidesPerView={1.3}
          loop={true}
          pagination={{ clickable: true }}
          // scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
          <SwiperSlide>
            <SingleSlider />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
