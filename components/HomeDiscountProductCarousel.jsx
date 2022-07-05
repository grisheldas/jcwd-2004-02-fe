import React, { Component } from "react";
import Slider from "react-slick";
import { HiOutlineChevronLeft, HiOutlineChevronRight } from "react-icons/hi";
import Image from "next/image";
import CardHomeTop from "./CartHomeTop";
import { API_URL } from "../helpers";

function HomeDiscountProductCarousel({ data }) {
  function NextArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="p-2 rounded-full bg-white drop-shadow-lg text-2xl absolute top-[150px] -right-1 z-10 "
      >
        <HiOutlineChevronRight className="text-3xl text-primary" />
      </div>
    );
  }

  function PrevArrow({ onClick }) {
    return (
      <div
        onClick={onClick}
        className="p-2 rounded-full bg-white drop-shadow-lg text-2xl absolute z-50 bottom-[60px] -left-5 hidden "
      >
        <HiOutlineChevronLeft className="text-3xl text-primary" />
      </div>
    );
  }

  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <div className="">
      <Slider {...settings}>
        {data.map((val, ind) => {
          return (
            <div className="py-2">
              <CardHomeTop
                key={ind}
                img={`${API_URL}${val.images[0].image}`}
                name={val.name}
                price={val.hargaJual}
                unit={val.unit}
              />
            </div>
          );
        })}
      </Slider>
    </div>
  );
}

export default HomeDiscountProductCarousel;