import { getPlateDetails } from "@/apiRequests";

const DeatilsPage = async ({ params }) => {
  const deatils = await getPlateDetails(params.id);
  const { title, description, price, image } = deatils;
  return (
    <div className="flex flex-col gap-5 justify-center items-center h-screen">
      <img src={image} alt={title} className="w-[500px] rounded-xl" />
      <h1 className="text-5xl uppercase">{title}</h1>
      <p>{description}</p>
      <p>
        <span className="text-secondaryColor">Price:</span> $ {price}
      </p>
      <button className="bg-secondaryColor text-whiteColor px-3 py-2 rounded-lg hover:bg-redColor">
        Add to Cart
      </button>
    </div>
  );
};

export default DeatilsPage;
