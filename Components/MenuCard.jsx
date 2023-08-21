import Image from "next/image";
import React from "react";

const MenuCard = ({ plateImage, plateName, desc, price }) => {
  return (
    <div className="w-[250px] h-[250px] flex flex-col items-center justify-center hover:bg-slate-900 pb-3 rounded-3xl">
      <div className=" dark:bg-darkColorLight dark:hover:bg-secondaryColor rounded-t-3xl hover:bg-secondaryColor ease-linear duration-200 overflow-hidden text-center w-full h-full">
        <Image
          src={plateImage}
          alt={plateName}
          className="hover:scale-110 w-full h-full ease-linear duration-200 object-cover"
          width={250}
          height={250}
        />
      </div>

      <div className="pt-5">
        <div className="mb-2">
          <h4 className="card__title sm:text-sm lg:text-lg xl:text-xl">
            {plateName}
          </h4>
          <p className="paragraph">{desc}</p>
        </div>

        <p className="text-secondaryColor">$ {price}</p>
      </div>
    </div>
  );
};

export default MenuCard;
