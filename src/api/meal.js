import { get, post } from "../setup/client";

const getMealListing = () => {
  return get("/api/recipes/");
};

const getMealSearch = () => {
  return get(`/search.php?s=`);
};

const getMealDetail = (body) => {
  return get(`/api/recipes/${body?.id}`);
};

const fetchCategories = () => {
  return get("/api/recipes/categories");
};
const saveRecipeDetails = (body) => {
  return post("/api/recipes/", { ...body });
};

export {
  getMealListing,
  getMealSearch,
  getMealDetail,
  fetchCategories,
  saveRecipeDetails,
};
