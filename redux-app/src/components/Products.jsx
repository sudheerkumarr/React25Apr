import React, { Component } from "react";
import { Link } from "react-router-dom";
import { getAllProductsAction } from "../actions/productsactions";
import { connect } from "react-redux";

class Products extends Component {
  state = {
    products: [],
  };
  // class component life cycle methods
  componentDidMount() {
    console.log("componentDidMount");
    // Dispatch action to get all products
    this.props.getAllProductsAction();
    setTimeout(() => {
      this.setState({ products: this.props.products });
    }, 2000);
  }
  render() {
    console.log(this.state.products);
    return (
      <div className="row">
        {this.state.products.map((product) => (
          <div className="col-lg-3 col-md-4 col-sm-6 col-xs-12">
            <div className="card m-2">
              <Link to={`/products/details/${product.id}`}>
                <img
                  src={product.image}
                  className="card-img-top"
                  alt={product.title}
                  height="180px"
                />
              </Link>
              <div className="card-body">
                <p className="card-title">{product.title}</p>
                <p>Price: {product.price}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}

// funtion to get updates from store
const mapStateToProps = (state) => {
  return {
    products: state.fakestore.products,
  };
};

// function to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    getAllProductsAction,
  };
};
export default connect(mapStateToProps, mapDispatchToProps())(Products);
