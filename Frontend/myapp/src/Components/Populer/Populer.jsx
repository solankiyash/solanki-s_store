import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./Populer.css";
import "swiper/swiper-bundle.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import data_product from "../../Assetes/data";
import Item from "../Item/Item";
function Populer() {
  return (
    <>
      <div className="populer">
        <h1>POPULER IN MEN</h1>
        <hr />
      </div>
      <div className="populer-item">
        <Swiper
          spaceBetween={50}
          slidesPerView={4}
          autoplay={false}
          loop={true}
          onSwiper={(swiper) => console.log(swiper)}
          modules={[Autoplay, Pagination, Navigation]}
        >
          {data_product.map((item, i) => {
            return (
              <SwiperSlide>
                <Item
                  key={i}
                  id={item.id}
                  name={item.name}
                  image={item.image}
                  new_price={item.new_price}
                  old_price={item.old_price}
                />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </div>
    </>
  );
}

export default Populer;
