import React from 'react';
import {Link} from 'react-router-dom';
import {UserAuth} from '../context/authContext';


const Protected = ({children}) => {
    const {user}=UserAuth();
    if(!user){
        return (<Link to='/'/>);
    }
        return children;

};

export default Protected;