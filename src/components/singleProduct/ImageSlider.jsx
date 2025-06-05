import { Pagination, Navigation, Thumbs } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/thumbs";

import { useState } from "react";

const images = [
  "/products/group_img_1x1.png",
  "/products/mintFrostProduct.jpg",
  "/products/citrusChillProduct.jpg",
  "/products/pineBreezeProduct.jpg",
  "/products/groupProduct_1x1.jpg",
];

function ImageSlider() {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  return (
    <div className="w-full max-w-[550px] p-4 sm:p-6 mx-auto">
      <Swiper
        modules={[Navigation, Pagination, Thumbs]}
        spaceBetween={20} // less space on mobile
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
        thumbs={{
          swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null,
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide key={i} className="flex items-center justify-center">
            <img
              className="object-contain w-full h-[300px] sm:h-[500px] rounded-md"
              src={src}
              alt={`Slide ${i + 1}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <Swiper
        onSwiper={setThumbsSwiper}
        modules={[Thumbs]}
        spaceBetween={10}
        slidesPerView={Math.min(images.length, 5)}
        freeMode={true}
        watchSlidesProgress={true}
        className="mt-4"
        breakpoints={{
          0: { slidesPerView: 3 }, // show 3 thumbnails on small screens
          640: { slidesPerView: 5 }, // 5 thumbnails on medium and above
        }}
      >
        {images.map((src, i) => (
          <SwiperSlide
            key={i}
            className="border-2 border-transparent cursor-pointer hover:border-blue-500"
          >
            <img
              src={src}
              alt={`Thumbnail ${i + 1}`}
              className="object-cover w-full h-16 rounded-md"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default ImageSlider;
