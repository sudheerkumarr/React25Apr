import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { logoutAction } from "../actions/loginactions";
import { useSelector, useDispatch } from "react-redux";

const Logout = () => {
  const dispatch = useDispatch();
  const email = useSelector((state) => state.login.user.email);
  useEffect(() => {
    dispatch(logoutAction(email));
  }, []);
  return (
    <div>
      <h1>
        Logged out successfully! To login again click
        <Link to="/login">here</Link>.
      </h1>
    </div>
  );
};

export default Logout;
