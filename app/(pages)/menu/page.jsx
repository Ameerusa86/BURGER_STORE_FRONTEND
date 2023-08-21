import MenuCard from "@/Components/MenuCard";
import { getMenu } from "@/apiRequests";
import Link from "next/link";

const MenuPage = async () => {
  const getMenuData = await getMenu();
  return (
    <div className="mt-16 px-10">
      <div class="max-w-7xl mx-auto text-center">
        <h2 class="section__title">OUR BEST MENU</h2>
        <div class="separator mx-auto"></div>
        <p class="paragraph">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>

        <div class="tabs_wrap">
          <ul class="flex flex-wrap justify-center gap-2 py-10">
            <li
              data-tabs="all"
              class="btn bg-primaryColorLight dark:bg-darkColorLight active"
            >
              All
            </li>
            <li
              data-tabs="food"
              class="btn bg-primaryColorLight dark:bg-darkColorLight"
            >
              Food
            </li>
            <li
              data-tabs="snack"
              class="btn bg-primaryColorLight dark:bg-darkColorLight"
            >
              Snack
            </li>
            <li
              data-tabs="beverage"
              class="btn bg-primaryColorLight dark:bg-darkColorLight"
            >
              Beverage
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-full flex-wrap gap-4 m-auto">
        {getMenuData.map((plate) => (
          <Link href={`/menu/${plate._id}`} key={plate._id} className="">
            <MenuCard
              plateImage={plate.image}
              plateName={plate.title}
              desc={plate.description}
              price={plate.price}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default MenuPage;
