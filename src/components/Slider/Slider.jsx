import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import ProductCard from "./ProductCard";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination } from "swiper/modules";

const Slider = () => {
  const [data, setData] = useState([]);
  const slider = useLoaderData();
  console.log(slider[0].sliderImg);
  const { brand } = useParams();

  useEffect(() => {
    fetch(`https://assignment10-server-wine.vercel.app/products/${brand}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data);
      });
  }, [brand]);

  return (
    <div className="">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="mySwiper mb-10 mt-24"
      >
        {slider[0].sliderImg.map((image) => (
          <SwiperSlide key={image}>
            <img
              className="w-full h-40 md:h-56 lg:h-80 object-cover"
              src={image}
              alt="slider img"
            />
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-10">
        {data.map((cardData) => (
          <ProductCard key={cardData._id} cardData={cardData}></ProductCard>
        ))}
      </div>
    </div>
  );
};

export default Slider;
