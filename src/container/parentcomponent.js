import React from "react";
import { FetchFoodCategory } from "../components/fetchfoodcategory";
import FoodType from "./../components/foodtype";
import { Router } from "./router";
export const ParentComponent = () => {
  return (
    <div id="parentcom">
      <div>
        <FetchFoodCategory />
      </div>
      <div className="row foodtype">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          <FoodType />
        </div>
        <div className="col-md-4"></div>
      </div>
      <Router/>
    </div>
  );
};
