import React from "react";
import CategoryCard from "../CategoryCard/CategoryCard";
import "./CategoryList.css";
import useGetCategories from "../../hooks/useGetCategories";

const CategoryList = () => {
  const { categories, loading } = useGetCategories();
  return (
    <div className="category-list">
      {loading
        ? Array.from({ length: 4 }).map((_, index) => (
            <div key={index} className="category-card">
              <h4 className="category-name">Loading...</h4>
            </div>
          ))
        : categories.map((category) => (
            <CategoryCard key={category} category={category} />
          ))}
    </div>
  );
};

export default CategoryList;
