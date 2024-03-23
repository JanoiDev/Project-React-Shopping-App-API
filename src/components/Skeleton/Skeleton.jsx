import React from "react";
import "./Skeleton.css";

const Skeleton = () => {
  return (
    <div className="skeleton-container">
      <div className="skeleton-image" />
      <div className="skeleton-datail">
        <div className="skeleton-title" />
        <div className="skeleton-category" />
        <div className="skeleton-flex">
          <div className="skeleton-price" />
          <div className="skeleton-button" />
        </div>
      </div>
    </div>
  );
};

export default Skeleton;
