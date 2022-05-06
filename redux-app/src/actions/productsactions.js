import axios from "axios";

// action to get all products
export const getAllProductsAction = () => async (dispatch) => {
  const response = await axios.get("https://fakestoreapi.com/products");
  console.log(response.data);
  dispatch({
    type: "GET_PRODUCTS",
    payload: response.data,
  });
};

// get product by id
// Add product action
// update
// delete
