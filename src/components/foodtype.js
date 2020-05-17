import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
const fn = (props) => {
  console.log("props.foodtypes :>> ", props.foodtypes);

  // Both the ways written below are working perfectly.......

  // var jsx =
  //   props.foodtypes == undefined ? (
  //     <></>
  //   ) : (
  //     props.foodtypes.map((itm, index) => (
  //       <ul key={index}>
  //         <li>
  //           <NavLink to={itm.replace(/\s/g, "").toLowerCase()}>{itm}</NavLink>
  //         </li>
  //       </ul>
  //     ))
  //   );
  // return <>{jsx}</>;
  if (props.foodtypes === undefined) {
    return <></>;
  }
  else {
    return props.foodtypes.map((itm, index) => (
      <ul key={index}>
        <li>
          <NavLink to={itm.replace(/\s/g, "").toLowerCase()}>{itm}</NavLink>
        </li>
      </ul>
    ));
  }
};

const mapStateToProps = (state) => {
  console.log("state.foodtypecollection :>> ", state.foodtypecollection);
  return {
    foodtypes: state.foodtypecollection,
  };
};

const FoodType = connect(mapStateToProps);
export default FoodType(fn);
