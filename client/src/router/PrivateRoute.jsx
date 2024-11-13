import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const userInfo = useSelector((state) => state.user);
    const user = userInfo?.user

    if (!user) {
        // Redirect to login if user is not found
        return <Navigate to="/login" replace />;
    }

    // If user exists, render the children components
    return children;
};

export default PrivateRoute;