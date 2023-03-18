import Ellipse from "../../assets/imgs/Ellipse.png";
import person01 from "../../assets/imgs/person01.png";
import left from "../../assets/imgs/left.png";
import right from "../../assets/imgs/right.png";
import { Swiper, SwiperSlide } from "swiper/react";
import { useRef } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper";
const Testimonials = () => {
  const swiperRef = useRef(null);
  return (
    <section className="bg-[#2C3062]">
      <h3 className="text-[#7A86FF] text-center text-3xl py-14 ">
        Testomonials
      </h3>
      <h2 className="text-white text-center text-2xl md:text-4xl">
        take a look on poeple’s thoughts on our benefits
      </h2>
      <div className="py-10 md:flex md:items-center md:justify-between">
        <div className="flex-1 md:px-[70px]">
          <h2 className="max-sm:text-center text-2xl text-white ">
            Name a Story
          </h2>
          <p className="max-sm:text-center py-4 md:text-sm   md:w-[320px] text-white text-lg">
            We’ ve helped millions feel better now it’s your turn to benefit
            from the “betterMe experence
          </p>
        </div>
        <Swiper
          ref={swiperRef}
          className="flex-1"
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
        >
          <SwiperSlide>
            <div className="relative flex justify-between max-sm:w-[90%] mx-auto   items-center md:pl-5 md:pr-10">
              <div onClick={() => swiperRef.current.swiper.slidePrev()}>
                <img className="w-[40px] cursor-pointer" src={left} alt="" />
              </div>
              <div>
                <img className="w-[350px] my-10" src={Ellipse} alt="" />
                <img
                  className="absolute bottom-[65%] md:bottom-[72%]  left-[20%] md:left-[37%] md:w-[80px]"
                  src={person01}
                  alt=""
                />
                <h3 className="absolute text-white w-[200px] max-sm:bottom-[30%] md:bottom-[30%] max-sm:left-[20%] md:left-[35%] text-[14px] md:text-xl">
                  Lorem Ipsum is simply for dummy text of the printing
                  typesetting industry. Lorem Ipsum has been the industry value
                  is given
                </h3>
              </div>
              <div onClick={() => swiperRef.current.swiper.slideNext()}>
                <img className="w-[40px] cursor-pointer" src={right} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-between max-sm:w-[90%] mx-auto   items-center md:pl-5 md:pr-10">
              <div onClick={() => swiperRef.current.swiper.slidePrev()}>
                <img className="w-[40px] cursor-pointer" src={left} alt="" />
              </div>
              <div>
                <img className="w-[350px] my-10" src={Ellipse} alt="" />
                <img
                  className="absolute bottom-[65%] md:bottom-[72%]  left-[20%] md:left-[37%] md:w-[80px]"
                  src={person01}
                  alt=""
                />
                <h3 className="absolute text-white w-[200px] max-sm:bottom-[30%] md:bottom-[30%] max-sm:left-[20%] md:left-[35%] text-[14px] md:text-xl">
                  Lorem Ipsum is simply for dummy text of the printing
                  typesetting industry. Lorem Ipsum has been the industry value
                  is given
                </h3>
              </div>
              <div onClick={() => swiperRef.current.swiper.slideNext()}>
                <img className="w-[40px] cursor-pointer" src={right} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-between max-sm:w-[90%] mx-auto   items-center md:pl-5 md:pr-10">
              <div onClick={() => swiperRef.current.swiper.slidePrev()}>
                <img className="w-[40px] cursor-pointer" src={left} alt="" />
              </div>
              <div>
                <img className="w-[350px] my-10" src={Ellipse} alt="" />
                <img
                  className="absolute bottom-[65%] md:bottom-[72%]  left-[20%] md:left-[37%] md:w-[80px]"
                  src={person01}
                  alt=""
                />
                <h3 className="absolute text-white w-[200px] max-sm:bottom-[30%] md:bottom-[30%] max-sm:left-[20%] md:left-[35%] text-[14px] md:text-xl">
                  Lorem Ipsum is simply for dummy text of the printing
                  typesetting industry. Lorem Ipsum has been the industry value
                  is given
                </h3>
              </div>
              <div onClick={() => swiperRef.current.swiper.slideNext()}>
                <img className="w-[40px] cursor-pointer" src={right} alt="" />
              </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="relative flex justify-between max-sm:w-[90%] mx-auto   items-center md:pl-5 md:pr-10">
              <div onClick={() => swiperRef.current.swiper.slidePrev()}>
                <img className="w-[40px] cursor-pointer" src={left} alt="" />
              </div>
              <div>
                <img className="w-[350px] my-10" src={Ellipse} alt="" />
                <img
                  className="absolute bottom-[65%] md:bottom-[72%]  left-[20%] md:left-[37%] md:w-[80px]"
                  src={person01}
                  alt=""
                />
                <h3 className="absolute text-white w-[200px] max-sm:bottom-[30%] md:bottom-[30%] max-sm:left-[20%] md:left-[35%] text-[14px] md:text-xl">
                  Lorem Ipsum is simply for dummy text of the printing
                  typesetting industry. Lorem Ipsum has been the industry value
                  is given
                </h3>
              </div>
              <div onClick={() => swiperRef.current.swiper.slideNext()}>
                <img className="w-[40px] cursor-pointer" src={right} alt="" />
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
