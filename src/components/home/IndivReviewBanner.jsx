import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";
import useReviews from "../../hooks/useReviews";
import Loader from "../Loader";

export default function IndivReviewBanner() {
  const { isLoading, reviews } = useReviews();
  if (isLoading) return <Loader />;
  return (
    <Swiper
      spaceBetween={20}
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      loop={true}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 1,
        slideShadows: false,
      }}
      navigation={true}
      modules={[EffectCoverflow, Navigation]}
      className="mySwiper"
      // Responsive breakpoints
      breakpoints={{
        320: {
          slidesPerView: 1.25,
          spaceBetween: 10,
          centeredSlides: true,
        },
        640: {
          slidesPerView: 1.5,
          spaceBetween: 15,
          centeredSlides: true,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 25,
        },
        1280: {
          slidesPerView: 3.5,
          spaceBetween: 30,
        },
      }}
    >
      {reviews.map(({ id, img, title, description, name, product }) => (
        <SwiperSlide key={id} className="flex justify-center">
          <div className="w-[300px] h-[400px] bg-white rounded-xl shadow-md flex flex-col overflow-hidden">
            <img src={img} alt={title} className="object-cover w-full h-48" />
            <div className="flex flex-col flex-grow p-5">
              <h3 className="mb-2 text-lg font-semibold line-clamp-2">
                {title}
              </h3>
              <p className="flex-grow text-sm text-gray-700 line-clamp-4">
                {description}
              </p>
              <p className="mt-4 text-xs font-medium text-gray-500">
                — {name} | <span className="italic">{product}</span>
              </p>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
