import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { getProductByIdAction } from "../actions/productsactions";

const ProductDetails = () => {
  const dispatch = useDispatch();
  const params = useParams();

  // dispatch action to get single product based on product id at the time of page loading
  useEffect(() => {
    dispatch(getProductByIdAction(params.id));
  }, []);

  // Get specific product details from store
  const product = useSelector((state) => state.fakestore.product);
  console.log(product);
  return (
    <div>
      <h1>ProductDetails</h1>
      <div className="row">
        <div col-lg-4>
          <img
            src={product.image}
            alt={product.image}
            width="150px"
            height="150px"
          />
          <button>Buy Now</button>
          <button>Add To Cart</button>
        </div>
        <div col-lg-8>
          <h3>{product.title}</h3>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
