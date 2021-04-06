import React from "react";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { InitRotator } from "./utils";
SwiperCore.use([Navigation, Pagination, Autoplay]);
const params = InitRotator();

const Title = ({ title }) => <h1>{title}</h1>;

const Track = ({ items = [] }) => {
  return (
    <>
      <Title title={"My Rotator"} />
      <Swiper
        {...params}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        onImagesReady={() => console.log(`onImagesReady`)}
      >
        {items.map((item, i) => (
          <SwiperSlide key={item.id}>
            <h4>
              {item.displayTitle} {i}
            </h4>
            <img
              className={`lazyload swiper-lazy`}
              data-src={item.image.promoImage.url}
              data-sizes="auto"
              data-srcset={`${item.image.promoImage.url}?width=1000&maintain_aspect=1 1000w,
              ${item.image.promoImage.url}?width=1500&maintain_aspect=1 1500w,
              ${item.image.promoImage.url}?width=1900&maintain_aspect=1 1900w`}
              sizes={`(max-width: 575px) 100vw, 
              (min-width: 576px) and (max-width:991px) 100vw,
              (min-width: 992px) and (max-width:1499px) 100vw,
              (min-width: 1500px) 100vw`}
              alt={item.displayTitle}
              width={"100%"}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Track;
