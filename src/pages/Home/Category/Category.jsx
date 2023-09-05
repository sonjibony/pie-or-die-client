// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

import slide1 from "../../../assets/category/pexels-lukas-1352295 (1).jpg";
import slide2 from "../../../assets/category/pexels-oksana-d-3081657.jpg";
import slide3 from "../../../assets/category/pexels-suzy-hazelwood-1126359.jpg";
import slide4 from "../../../assets/category/pexels-valeria-boltneva-1247670 (1).jpg";
import slide5 from "../../../assets/category/pexels-valeria-boltneva-827516 (1).jpg";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const Category = () => {
  return (
    <section>
      <SectionTitle
        subHeading={"From 11.00am to 10.00pm"}
        heading={"Order Online"}
      ></SectionTitle>

      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
      >
        <SwiperSlide>
          <img src={slide1} alt="" />
          <h3 className="text-xl uppercase text-center -mt-14">Lemon Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide2} alt="" />
          <h3 className="text-xl uppercase text-center -mt-14">Lemon Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide3} alt="" />
          <h3 className="text-xl uppercase text-center -mt-14">Lemon Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide4} alt="" />
          <h3 className="text-xl uppercase text-center -mt-14">Lemon Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide5} alt="" />
          <h3 className="text-xl uppercase text-center -mt-14">Lemon Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
          <h3 className="text-xl uppercase text-center -mt-14">Lemon Cake</h3>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <img src={slide1} alt="" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Category;
