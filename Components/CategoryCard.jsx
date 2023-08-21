import CategoriesCardData from "@/data/CategoryData";
import Image from "next/image";
import React from "react";

const CategoryCard = () => {
  return (
    <section id="category">
      <div class="container flex flex-col gap-5 md:flex-row">
        {CategoriesCardData.map((items) => (
          <div
            class={`category__card ${items.bgColor} flex py-3 rounded-lg overflow-hidden md:flex-1`}
          >
            <div class="basis-1/3 relative">
              <Image
                src={items.image}
                alt="category image"
                class="absolute w-28 -bottom-4 -left-4"
                width={280}
                height={280}
              />
            </div>

            <div>
              <div class="mb-2">
                <h4 class="card__title">{items.title}</h4>
                <p class="text-xs">{items.description}</p>
              </div>

              <a href="#" class="text-blackColor cursor-pointer">
                {items.link}
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CategoryCard;
