import { saveRecipeDetails } from "@/api/meal";
import { useFetchData } from "@/hooks/useFetchData";
import { useState } from "react";

const useRecipeAdd = ({ onClose }) => {
  const [submitData, setSubmitData] = useState({});

  const handleSubmitRecipeForm = (values) => {
    console.log("values", values);
    let payload = {
      title: values?.title,
      description: values?.description,
      imageUrl: values?.imageUrl,
      ingredients: values?.ingredients,
      instructions: values?.instructions,
      category: values?.category?.value,
      area: values?.area,
      source: values?.source,
      link: values?.link,
    };
    setSubmitData(payload);
  };

  const successCallback = (data, type) => {
    switch (type) {
      case "recipeDetails":
        console.log("data", onClose);
        data && onClose
        break;
      default:
        break;
    }
  };

  // error callback function
  const errorCallback = (error, type) => {
    switch (type) {
      case "recipeDetails":
        break;
      default:
        break;
    }
  };

  // submit recipe details api
  const [{ _data, isLoading }] = useFetchData({
    apiFunction: saveRecipeDetails,
    defaultResponseValue: [],
    dependencyArray: [submitData],
    apiParams: submitData,
    apiCallCondition: Object.keys(submitData)?.length,
    showSuccessMessage: true,
    showErrorMessage: true,
    successCallback: (data) => successCallback(data, "recipeDetails"),
    errorCallback: (error) => errorCallback(error, "recipeDetails"),
  });

  return [{}, { handleSubmitRecipeForm }];
};

export default useRecipeAdd;
