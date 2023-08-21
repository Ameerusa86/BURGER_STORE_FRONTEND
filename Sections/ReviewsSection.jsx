"use client";

import { Review1, Review2, Review3, Review4, Review5 } from "@/data/images";
import Image from "next/image";
import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

const ReviewsSection = () => {
  return (
    <section className="bg-primaryColorLight dark:bg-darkColorLight py-20">
      <div className="customer__review container">
        <div className="max-w-md mx-auto text-center">
          <h2 className="section__title">CUSTOMER REVIEW</h2>
          <div className="separator mx-auto"></div>
          <p className="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa.
          </p>
        </div>

        <div className="py-10">
          <Splide
            options={{
              rewind: true,
              width: 800,
              gap: "1rem",
              width: "100%",
              perPage: 3,
              breakpoints: {
                // when window width is <= 640px
                640: {
                  perPage: 1,
                },
              },
            }}
          >
            <SplideSlide>
              <div className="">
                <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={Review1}
                      alt="review image"
                      className="w-12 h-12 rounded-full"
                      width={250}
                      height={250}
                    />
                    <div className="ml-2">
                      <p className="font-oswald uppercase">John doe</p>
                      <p className="paragraph">Designer</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="">
                <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={Review2}
                      alt="review image"
                      className="w-12 h-12 rounded-full"
                      width={250}
                      height={250}
                    />
                    <div className="ml-2">
                      <p className="font-oswald uppercase">John doe</p>
                      <p className="paragraph">Designer</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="">
                <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={Review3}
                      alt="review image"
                      className="w-12 h-12 rounded-full"
                      width={250}
                      height={250}
                    />
                    <div className="ml-2">
                      <p className="font-oswald uppercase">John doe</p>
                      <p className="paragraph">Designer</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="">
                <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={Review4}
                      alt="review image"
                      className="w-12 h-12 rounded-full"
                      width={250}
                      height={250}
                    />
                    <div className="ml-2">
                      <p className="font-oswald uppercase">John doe</p>
                      <p className="paragraph">Designer</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                  </div>
                </div>
              </div>
            </SplideSlide>
            <SplideSlide>
              <div className="">
                <div className="flex flex-col gap-5 bg-primaryColor dark:bg-darkColor rounded-lg p-6">
                  <p className="paragraph">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Similique culpa ut amet voluptas asperiores alias sed
                    consequatur.
                  </p>
                  <div className="flex items-center">
                    <Image
                      src={Review5}
                      alt="review image"
                      className="w-12 h-12 rounded-full"
                      width={250}
                      height={250}
                    />
                    <div className="ml-2">
                      <p className="font-oswald uppercase">John doe</p>
                      <p className="paragraph">Designer</p>
                    </div>
                    <i className="fa-solid fa-quote-right text-4xl text-secondaryColor ml-auto"></i>
                  </div>
                </div>
              </div>
            </SplideSlide>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
