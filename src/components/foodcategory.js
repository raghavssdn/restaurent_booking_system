import React from "react";
import firebase from "../utils/firebase";
import { actionCreator } from "../action/actioncreator";
import { store } from "../store/commonstore";

export const FoodCategory = (props) => {
  // const [foodtypes, setFoodTypes] = React.useState([]);
  const fetchFoodTypes = async (event) => {
    var ev = event.target.innerText;
    console.log(event.target.innerText);
    const db = firebase.firestore();
    await db.collection("Foodtypes").onSnapshot((data) =>
      data.forEach(
        (doc) => {
          const action = actionCreator(doc.data()[ev]);
          store.dispatch(action);
        }
        // console.log(doc.data()[ev])
        // setFoodTypes(doc.data()[ev])
      )
    );
  };

  return (
    <div className="row">
      {props.food.map((item, index) => (
        <div key={index} className="col-md-3 my_center">
          <img src={item[1]} alt="img" width="150" height="140" />
          <h3
            className="cursor"
            onClick={(event) => {
              fetchFoodTypes(event);
            }}
          >
            {item[0]}
          </h3>
        </div>
      ))}
      {/* {foodtypes.map((itm, index) => (
        <ul key={index}>
          <li>
            <NavLink to={itm.replace(/\s/g, "").toLowerCase()}>{itm}</NavLink>
          </li>
        </ul>
      ))} */}
    </div>
  );
};
