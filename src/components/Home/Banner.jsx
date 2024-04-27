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
import Subscribe from "./Subscribe";

const Banner = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, EffectCoverflow, A11y]}
      spaceBetween={30}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      slidesPerView={"auto"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 100,
        modifier: 2.5,
      }}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl opacity-50"
          src="https://i.postimg.cc/ZqYwW5w8/pexels-wolfgang-weiser-18705291.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-rose-500 text-center  to-rose-900 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className=" text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl "
          src="https://i.postimg.cc/Y0x7z9wp/pexels-mark-2724749.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-yellow-600 text-center  to-orange-700 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className="text-red-400 text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl"
          src="https://i.postimg.cc/6QCmvPKK/pexels-matteo-angeloni-18596360.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-purple-400 text-center  to-purple-700 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className="text-green-500 text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl"
          src="https://i.postimg.cc/bvf6pRtB/pexels-onur-18614981.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-400 text-center  to-indigo-700 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className="text-green-500 text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl"
          src="https://i.postimg.cc/wBkkHYH1/pexels-roman-odintsov-5855891.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-green-400 text-center  to-green-700 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className="text-white text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl"
          src="https://i.postimg.cc/SKVtdMn1/1.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-rose-400 text-center  to-rose-700 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className="text-green-500 text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl"
          src="https://i.postimg.cc/VNGP6TWN/2.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-red-400 text-center  to-red-700 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className="text-green-500 text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl"
          src="https://i.postimg.cc/mDzJrrrd/3.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-indigo-400 text-center  to-rose-700 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className="text-green-500 text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      <SwiperSlide className="mb-3  relative bg-white">
        <img
          data-aos="zoom-in"
          data-aos-duration="1000"
          data
          className="w-full md:h-[450px] lg:h-[650px] rounded-3xl"
          src="https://i.postimg.cc/VN5H7NXY/5.jpg"
          alt=""
        />
        <div className="absolute hidden md:flex flex-col justify-center items-center w-full h-full space-y-5 top-0">
          <p className="text-6xl font-bold text-transparent bg-gradient-to-r from-rose-400 text-center  to-rose-700 bg-clip-text">
            Welcome to Our <br />
            Home Haven
          </p>
          <p className="text-white text-xl font-semibold">
            Always get latest update subscribe now !
          </p>
          <Subscribe></Subscribe>
        </div>
      </SwiperSlide>
      ...
    </Swiper>
  );
};

export default Banner;
