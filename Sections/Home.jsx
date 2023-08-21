import Image from "next/image";
import React from "react";
import { HomeIMG } from "@/data/images";
import { FaUtensils, FaEnvira } from "react-icons/fa";
import { BsFillDropletFill } from "react-icons/bs";
import Link from "next/link";

const HomeSection = () => {
  return (
    <section>
      <div class="container  flex flex-col items-center gap-10 md:flex-row">
        <div class="mx-auto md:basis-1/2 lg:basis-2/5 animate-movingY">
          <Image
            src={HomeIMG}
            alt="home image"
            class="home__image w-60 md:w-full"
            width={600}
            height={600}
          />
        </div>

        <div class="home__content text-center md:basis-1/2 md:text-start lg:basis-3/5">
          <h1 class="home__title">HAPPY TUMMY WITH TASTY BURGERS.</h1>
          <div class="separator mx-auto md:mx-0"></div>
          <p class="paragraph">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatum,libero magni? Fugiat perspiciatis eius, sequi aliquid
            ullam dolorem temporibus voluptate corrupti fugit saepe sunt unde
            culpa? Tenetur quos quod laudantium.
          </p>
          <div class="text-base flex items-center justify-center gap-4 py-10 md:justify-start md:gap-20">
            <div class="text-center">
              <FaUtensils className="text-secondaryColor text-4xl" />
              <br />
              Delicious
            </div>

            <div class="text-center">
              <BsFillDropletFill className="text-secondaryColor text-4xl" />
              <br />
              Fresh
            </div>

            <div class="text-center">
              <FaEnvira className="text-secondaryColor text-4xl" />
              <br />
              Organic
            </div>
          </div>

          <Link href="#" class="btn btn-primary">
            learn more
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
