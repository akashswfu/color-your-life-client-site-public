import {
  Navigation,
  Pagination,
  EffectCoverflow,
  Scrollbar,
  A11y,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/effect-coverflow";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const OurGallary = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, A11y]}
      spaceBetween={30}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"2"}
      //   coverflowEffect={{
      //     rotate: 0,
      //     stretch: 0,
      //     depth: 100,
      //     modifier: 2.5,
      //   }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px] rounded-3xl opacity-50"
          src="https://i.postimg.cc/ZqYwW5w8/pexels-wolfgang-weiser-18705291.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px]rounded-3xl "
          src="https://i.postimg.cc/Y0x7z9wp/pexels-mark-2724749.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px]rounded-3xl"
          src="https://i.postimg.cc/6QCmvPKK/pexels-matteo-angeloni-18596360.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px]rounded-3xl"
          src="https://i.postimg.cc/bvf6pRtB/pexels-onur-18614981.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px]rounded-3xl"
          src="https://i.postimg.cc/wBkkHYH1/pexels-roman-odintsov-5855891.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px]rounded-3xl"
          src="https://i.postimg.cc/SKVtdMn1/1.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px]rounded-3xl"
          src="https://i.postimg.cc/VNGP6TWN/2.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px]rounded-3xl"
          src="https://i.postimg.cc/mDzJrrrd/3.jpg"
          alt=""
        />
      </SwiperSlide>
      <SwiperSlide className="mb-3   bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[350px] lg:h-[350px]rounded-3xl"
          src="https://i.postimg.cc/VN5H7NXY/5.jpg"
          alt=""
        />
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default OurGallary;
