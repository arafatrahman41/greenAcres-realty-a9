import PropTypes from "prop-types";
import useAuth from "../../hook/useAuth";
import { Navigate, useLocation } from "react-router-dom";
import Loading from "../Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <Loading />;
  }

  if (user) {
    return <div>{children}</div>;
  }

  return <Navigate to="/login" state={location?.pathname || "/"}></Navigate>;
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
