import { useContext } from "react";
import { AuthContext } from "../Provider/AuthProvider";
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

const PrivateRoute = ({ children }) => {

    const { user, loading } = useContext(AuthContext);
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center h-[80vh]">
            <span className="loading loading-lg loading-spinner text-[#152475]"></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname} to='/login'></Navigate>

};

PrivateRoute.propTypes = {
    children: PropTypes.object.isRequired
}

export default PrivateRoute;