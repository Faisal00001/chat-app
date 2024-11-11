import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const user = JSON.parse(localStorage.getItem('User'))
    if (user) {
        return children
    }
    return <Navigate to={`/login`} replace></Navigate>
};

export default PrivateRoute;