import React, { useEffect, useRef, useState } from "react";
import styles from "./recipeForm.module.scss";
import { Formik } from "formik";
import { Button, Dropdown } from "../common";
import { Col, Row } from "antd";
import Input from "../common/input/input";
import TextArea from "../common/textArea/textArea";
import useRecipeAdd from "./hook/useRecipeAdd";

const RecipeForm = ({ onClose = () => {}, isFormOpen }) => {
  const recipeFormRef = useRef();
  const [categories, setCategories] = useState({});

  const [{}, { handleSubmitRecipeForm }] = useRecipeAdd({ onClose });

  const fetchCategories = async () => {
    try {
      const response = await fetch(
        "http://localhost:5226/api/recipes/categories"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch categories");
      }
      const data = await response.json();
      setCategories(data);
      return data;
    } catch (error) {
      console.error("Error fetching categories:", error);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const getInitialState = () => {
    const data = {
      title: "",
      description: "",
      imageUrl: "",
      ingredients: "",
      instructions: "",
      category: "",
      area: "",
      source: "",
      link: "",
    };
    return {
      ...data,
    };
  };

  return (
    <div className={`${styles.formContainer} ${isFormOpen ? styles.open : ""}`}>
      <Formik
        initialValues={getInitialState()}
        //   validationSchema={employeeFormSchema(recipeFormRef)}
        //   validateOnChange
        //   validateOnBlur
        enableReinitialize
        innerRef={recipeFormRef}
        onSubmit={(values) => {
          handleSubmitRecipeForm(values);
        }}
      >
        {({
          values,
          errors,
          touched,
          setFieldValue,
          setFieldTouched,
          handleSubmit,
          setFieldError,
          handleChange,
        }) => (
          <div>
            <form onSubmit={handleSubmit} className={styles.form}>
              <h2>Add Recipe</h2>
              <Row className={styles.row} gutter={16} align="start">
                <Col className={styles.col}>
                  <Input
                    type={"text"}
                    size="large"
                    label="Recipe Name"
                    value={values?.title}
                    name="title"
                    placeholder="Recipe Name"
                    onChange={(e) => {
                      setFieldTouched("title");
                      setFieldValue("title", e?.target?.value ?? "");
                    }}
                    showError={errors?.title && touched?.title}
                    error={errors?.title}
                  />
                </Col>
                <Col className={styles.col}>
                  <TextArea
                    type={"text"}
                    size="large"
                    label="Description"
                    value={values?.description}
                    name="description"
                    placeholder="Description"
                    onChange={(e) => {
                      setFieldTouched("description");
                      setFieldValue("description", e?.target?.value ?? "");
                    }}
                    showError={errors?.description && touched?.description}
                    error={errors?.description}
                  />
                </Col>
                <Col className={styles.col}>
                  <Input
                    type={"text"}
                    size="large"
                    label="Image"
                    value={values?.imageUrl}
                    name="imageUrl"
                    placeholder="Image"
                    onChange={(e) => {
                      setFieldTouched("imageUrl");
                      setFieldValue("imageUrl", e?.target?.value ?? "");
                    }}
                    showError={errors?.imageUrl && touched?.imageUrl}
                    error={errors?.imageUrl}
                  />
                </Col>
                <Col className={styles.col}>
                  <TextArea
                    type={"text"}
                    size="large"
                    label="Ingredients"
                    value={values?.ingredients}
                    name="ingredients"
                    placeholder="Ingredients"
                    onChange={(e) => {
                      setFieldTouched("ingredients");
                      setFieldValue("ingredients", e?.target?.value ?? "");
                    }}
                    showError={errors?.ingredients && touched?.ingredients}
                    error={errors?.ingredients}
                  />
                </Col>
                <Col className={styles.col}>
                  <TextArea
                    type={"text"}
                    size="large"
                    label="Instructions"
                    value={values?.instructions}
                    name="instructions"
                    placeholder="Instructions"
                    onChange={(e) => {
                      setFieldTouched("instructions");
                      setFieldValue("instructions", e?.target?.value ?? "");
                    }}
                    showError={errors?.instructions && touched?.instructions}
                    error={errors?.instructions}
                  />
                </Col>
                <Col className={styles.col}>
                  <Dropdown
                    size="large"
                    label="Category"
                    options={categories}
                    value={values?.category}
                    name="category"
                    placeholder="Category"
                    onChange={(e) => {
                      setFieldTouched("category");
                      setFieldValue("category", e ?? "");
                    }}
                    showError={errors?.category && touched?.category}
                    error={errors?.category}
                    isClearable={true}
                  />
                </Col>
                <Col className={styles.col}>
                  <Input
                    type={"text"}
                    size="large"
                    label="Area"
                    value={values?.area}
                    name="area"
                    placeholder="Area"
                    onChange={(e) => {
                      setFieldTouched("area");
                      setFieldValue("area", e?.target?.value ?? "");
                    }}
                    showError={errors?.area && touched?.area}
                    error={errors?.area}
                  />
                </Col>
                <Col className={styles.col}>
                  <Input
                    type={"text"}
                    size="large"
                    label="Source"
                    value={values?.source}
                    name="source"
                    placeholder="Source"
                    onChange={(e) => {
                      setFieldTouched("source");
                      setFieldValue("source", e?.target?.value ?? "");
                    }}
                    showError={errors?.source && touched?.source}
                    error={errors?.source}
                  />
                </Col>
                <Col className={styles.col}>
                  <Input
                    type={"text"}
                    size="large"
                    label="Link"
                    value={values?.link}
                    name="link"
                    placeholder="Link"
                    onChange={(e) => {
                      setFieldTouched("link");
                      setFieldValue("link", e?.target?.value ?? "");
                    }}
                    showError={errors?.link && touched?.link}
                    error={errors?.link}
                  />
                </Col>
              </Row>
              <Button
                htmlType="submit"
                type="submit"
                buttonText="Save"
                size="large"
                className={styles.saveButton}
              />
              <Button
                htmlType="primary"
                type="button"
                buttonText="Cancel"
                size="large"
                className={styles.cancelButton}
                onClick={onClose}
              />
            </form>
          </div>
        )}
      </Formik>
    </div>
  );
};

export default RecipeForm;
