import PromosData from "@/data/PromoData";
import { Promo1 } from "@/data/images";
import Image from "next/image";
import React from "react";

const Promo = () => {
  return (
    <section id="promo">
      <div class="container flex flex-col gap-5 lg:gap-10 lg:flex-row">
        {PromosData.map((promo) => (
          <div class="promo__card-1 bg-primaryColorLight dark:bg-darkColorLight flex flex-col p-5 rounded-lg md:flex-row md:items-center lg:flex-row-reverse lg:flex-1">
            <Image
              src={promo.image}
              alt="promo image"
              class="w-40 mx-auto hover:animate-movingY md:mx-5"
              width={350}
              height={350}
            />

            <div class="space-y-2 pt-5 md:pt-0">
              <p class="text-xs text-secondaryColor">{promo.title}</p>
              <h3 class="card__title">{promo.subTitle}</h3>
              <p class="paragraph">{promo.desc}</p>
              <a href="#" class="text-xs text-secondaryColor">
                {promo.btnLink}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Promo;
