import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import "./testimonials.css";

const data = [
  {
    // avatar: img1,
    name: "Client 1",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, qui tempora! Blanditiis consectetur quis molestiae, fugit nam dolorum soluta, illum alias assumenda voluptate numquam aliquam veniam quae a quisquam non.",
  },
  {
    // avatar: img2,
    name: "Client 2",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, qui tempora! Blanditiis consectetur quis molestiae, fugit nam dolorum soluta, illum alias assumenda voluptate numquam aliquam veniam quae a quisquam non.",
  },
  {
    // avatar: img3,
    name: "Client 3",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, qui tempora! Blanditiis consectetur quis molestiae, fugit nam dolorum soluta, illum alias assumenda voluptate numquam aliquam veniam quae a quisquam non.",
  },
  {
    // avatar: img4,
    name: "Client 4",
    review:
      " Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, qui tempora! Blanditiis consectetur quis molestiae, fugit nam dolorum soluta, illum alias assumenda voluptate numquam aliquam veniam quae a quisquam non.",
  },
];

const Testimonials = () => {
  return (
    <section id="testimonials">
      <h5>Review from Clients</h5>
      <h2>Testimonials</h2>

      <Swiper
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="container testimonials-container"
        spaceBetween={40}
        slidesPerView={1}
      >
        {data.map(({ avatar, name, review }, index) => {
          return (
            <SwiperSlide key={index} className="testimonial">
              <img src={avatar} alt={name} className="client-avatar" />
              <h5 className="client-name">{name}</h5>
              <small className="client-review">{review}</small>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </section>
  );
};

export default Testimonials;
