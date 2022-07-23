import {Route, Routes} from "react-router-dom";
import {publicRoutes} from "../routes";
import Home from "../pages/Home";


const AppRouter = () => {
    return (
        <Routes>
            {publicRoutes.map(({path, Component}) =>
                <Route key={path} path={path} element={<Component/>}  exact/>
            )}
            <Route path='*' element={<Home/>}/>
        </Routes>
    );
};

export default AppRouter;