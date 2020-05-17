import React from "react";
import firebase from "../utils/firebase";
import { FoodCategory } from './foodcategory';

export const FetchFoodCategory = () => {
  const [foodcategories, setFoodCategories] = React.useState([]);

  React.useEffect(() => {
    const fetchfoodcategories = async () => {
      const db = firebase.firestore();
      //   const data = await db.collection("foodcategories").get();
      //   setFoodCategories(data.docs.map((doc) => doc.data()));
      await db
        .collection("users")
        .onSnapshot((data) =>
          data.forEach(
            (doc) =>
              setFoodCategories(
                Object.keys(doc.data()).map((item) => doc.data()[item]).sort()
              )
            //   console.log('hi',
            //     Object.keys(doc.data()).map((item) => doc.data()[item]).sort()
            // )
          )
        );
      // setFoodCategories(data.docs.map((doc) => doc.data()));
    };
    fetchfoodcategories();
  }, []);
  return (
    <div>
      <FoodCategory food={foodcategories} />
    </div>
  );
};
