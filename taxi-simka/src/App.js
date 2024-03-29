import {BrowserRouter} from "react-router-dom";
import AppRouter from "./components/AppRouter";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import './classes/App.css'




function App() {


    return (
        <BrowserRouter>
            <NavBar/>
            <AppRouter />
            <Footer/>
        </BrowserRouter>
    );
}

export default App;
