const getMenu = async () => {
  const apiURL = process.env.API_URL;

  const response = await fetch(`${apiURL}/api/menu`, {
    next: { revalidate: 10 },
  });
  const data = await response.json();
  return data;
};

const getPlateDetails = async (id) => {
  const apiURL = process.env.API_URL;
  const response = await fetch(`${apiURL}/api/menu/${id}`, {
    cache: "no-cache",
  });
  if (!response.ok) {
    throw new Error("Failed to fetch Food details from FoodMania API");
  }
  const data = await response.json();
  return data;
};

export { getMenu, getPlateDetails };
