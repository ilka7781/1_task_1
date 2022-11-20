import React from 'react';
import {Route, Routes, Navigate, useNavigate} from 'react-router-dom';
import {privateRoutes, publicRoutes} from "./routes";
import {LOGIN_ROUTE, MAIN_ROUTE} from "../utils/consts";

const AppRouter = () => {
    const user = false;
    const navigateMain=useNavigate({MAIN_ROUTE});
    const navigateLogin=useNavigate({LOGIN_ROUTE});
    return user ?
        (
            <Routes>
                {privateRoutes.map (({path, element}) =>
                <Route key={path} path={path} element={element}  exact={true}/>
                )}
                <Route path={MAIN_ROUTE}/>
            </Routes>
        )
        :
        (
            <Routes>
                {publicRoutes.map(({path, element}) =>
                    <Route key={path} path={path} element={element} exact={true}/>
                )}
                <Route path={LOGIN_ROUTE}/>
            </Routes>
        )
};

export default AppRouter;