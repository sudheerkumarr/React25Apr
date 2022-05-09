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
      <p className="fs-5 text-center">
        Logged out successfully! Click <Link to="/login">here</Link> to Login
        again.
      </p>
    </div>
  );
};

export default Logout;
