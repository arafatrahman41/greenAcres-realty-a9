import PropTypes from "prop-types";
import useAuth from "../../hook/useAuth";

const PrivateRoute = ({ children }) => {
    const {user} = useAuth()
    if(!user){
        return
    }

  return (
    <div>
        {children}
    </div>
  );
};

PrivateRoute.propTypes = {
  children: PropTypes.node,
};

export default PrivateRoute;
