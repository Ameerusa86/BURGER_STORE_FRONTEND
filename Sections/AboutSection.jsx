import { AboutIMG } from "@/data/images";
import Image from "next/image";
import React from "react";
import { AiOutlineCheck } from "react-icons/ai";

const AboutSection = () => {
  return (
    <section>
      <div class="container flex flex-col gap-10 md:flex-row">
        <div class="about__img flex-1">
          <Image
            src={AboutIMG}
            alt="about image"
            class="rounded-lg"
            width={350}
            height={350}
          />
        </div>

        <div class="about__content flex-1">
          <h2 class="section__title">
            FIND FOOD AND DRINKS, ALL-IN-ONE PLACE FOR YOUR BEST TASTE.
          </h2>
          <div class="separator"></div>
          <p class="paragraph">
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes.
          </p>
          <ul class="grid grid-cols-2 py-5 space-y-1">
            <li class="text-xs text-paragraphColor flex gap-2 items-center">
              <AiOutlineCheck className="text-secondaryColor" size={15} />
              Best Price
            </li>
            <li class="text-xs text-paragraphColor flex gap-2 items-center">
              <AiOutlineCheck className="text-secondaryColor" size={15} />
              Fresh Ingredient
            </li>
            <li class="text-xs text-paragraphColor flex gap-2 items-center">
              <AiOutlineCheck className="text-secondaryColor" size={15} />
              Best Service
            </li>
            <li class="text-xs text-paragraphColor flex gap-2 items-center">
              <AiOutlineCheck className="text-secondaryColor" size={15} />
              Health Protocol
            </li>
          </ul>
          <a href="" class="btn btn-primary">
            About us
          </a>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
