import React, {useContext} from 'react';
import {Navigate, Route, Routes} from "react-router-dom";
import {publicRoutes, privatRoutes} from "../router/routes";
import {AuthContext} from "../context";
import Loader from "./UI/Loader/Loader";

const AppRouter = () => {
    const {isAuth, isLoading} = useContext(AuthContext)

    if (isLoading){
        return <Loader/>
    }

    return (
        isAuth
            ?
            <Routes>
                {privatRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to='/posts'/>}
                /> {/* обработка несуществующих URL*/}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(route =>
                    <Route
                        path={route.path}
                        element={route.element}
                        key={route.path}
                    />
                )}
                <Route
                    path="*"
                    element={<Navigate to='/login'/>}
                /> {/* обработка несуществующих URL*/}
            </Routes>
    );
};

export default AppRouter;
