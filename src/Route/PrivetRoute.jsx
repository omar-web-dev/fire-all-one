import React, { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { AuthContext } from '../Pages/Context/UseContext';

const PrivetRoute = ({children}) => {
    const {user} = useContext(AuthContext)
    if(!user){
        return <Navigate to="/sing-in" ></Navigate>
    }
    return children

};

export default PrivetRoute;