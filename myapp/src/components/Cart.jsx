import React, { Component } from "react";
import Counter from "./Counter";

class Cart extends Component {
  state = {};
  render() {
    return (
      <div>
        <table className="table w-75 mx-auto">
          <thead>
            <tr>
              <th scope="col">Product Id</th>
              <th scope="col">Name</th>
              <th scope="col">M.R.P</th>
              <th scope="col">Quantity</th>
              <th scope="col">Total</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>LG T.V</td>
              <td>25000</td>
              <td>
                <Counter />
              </td>
              <td>25000</td>
            </tr>
            <tr>
              <th scope="row">2</th>
              <td>SamSung T.V</td>
              <td>36000</td>
              <td>
                <Counter />
              </td>
              <td>36000</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Cart;
