import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
import { Avatar, Badge } from "@mui/material";
import { Twitter } from "@mui/icons-material";


const Cards = ({name,id,role,review}) => {
  return (

    <div className="min-h-[8rem]">
      <div className="p-5 rounded flex gap-4 shadow-md bg-white">
        <span>
          <Badge
            overlap="circular"
            anchorOrigin={{ vertical: 'top', horizontal: 'left' }}
            badgeContent={
              <Twitter className="z-10 text-sky-600" />
            }
          >
            <Avatar className="overflow-visible" alt={name} src="/static/images/avatar/2.jpg" />
          </Badge>

        </span>
        <div className="flex flex-col">
          <div className="flex gap-6">
          <span className="font-bold">
            {name}
          </span>
          <span className="text-gray-600">{role}</span>
          </div>
          
          <span className="text-gray-400 text-sm">
            @{id}
          </span>
         

          <div>
            atae minima, praesentium officia dicta. Amet maiores mollitia mole
          </div>
        </div>
      </div>

    </div>

  )
}

const Reviews = () => {
  return (
    <section className="bg-white">
      <div className="max-w-screen-xl px-4 py-16 mx-auto sm:px-6 lg:px-8 sm:py-24">
        <h2 className="text-4xl font-bold tracking-tight text-center sm:text-5xl">
          What our users have to say!
        </h2>

        <div className="mt-12 flex gap-5 swiper-container !overflow-hidden">
          <Swiper
            
            slidesPerView={3}
            spaceBetween={30}
            navigation={true}
            breakpoints={{
              320: {
                slidesPerView: 1,

              },
              640: {
                slidesPerView: 1,

              },
              768: {
                slidesPerView: 3,
                spaceBetween: 40,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
              1444: {
                slidesPerView: 3,
                spaceBetween: 20,
              },
            }}
            modules={[Navigation]}

            className="mySwiper p-4 max-h-[15rem]">

            <SwiperSlide><Cards 
              name="Maj Uday Anshuman"
              id="majudayanshuman"
              role="Indian Army"
            /></SwiperSlide>
            <SwiperSlide><Cards 
              name="Pranati Bharadkar"
              id="pranatibharadkar"
              role="Undergraduate student"
            /></SwiperSlide>
            <SwiperSlide><Cards 
              name="Sanket Sahu"
              id="sanketsahu"
              role="Data Engineer, Google"
            /></SwiperSlide>
            <SwiperSlide><Cards 
              name="Karan Ratnam"
              id="karanratnam"
              role="Associate, McKinsey"
            /></SwiperSlide>
            <SwiperSlide><Cards 
              name="Anshika Garg"
              id="anshikagarg"
              role="Brand Manager, Dabur"
            /></SwiperSlide>
            <SwiperSlide><Cards 
              name="Neha"
              id="neha"
              role="AVP, Goldman Sachs"
            /></SwiperSlide>
            <SwiperSlide><Cards 
              name="Sidhant Pati"
              id="sidhantpati"
              role="Program Manager, Amazon"
            /></SwiperSlide>
            <SwiperSlide><Cards 
              name="Ayan Chakraborty"
              id="ayanchakraborty"
              role="Product Manager, Microsoft"
            /></SwiperSlide>
            
            
          </Swiper>
        </div>
      </div>


    </section>
  );
}

export default Reviews;