import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.css';
import "../assets/css/login.css"
import "../assets/css/home.css"
import "../assets/css/neumo.css"
import "../assets/css/register.css"
import LoginPageContainer from "../pages/LoginContainer";
import HomePageContainer from "../pages/HomeContainer";
import RegisterContainer from "../pages/RegisterContainer";
import NeumoniaContainer from "../pages/NeumoniaContainer";
import NeumotoraxContainer from "../pages/NeumotoraxContainer";

const App = () => {
    return (
        <>
            <BrowserRouter>
                <Routes >
                    <Route exact path="/login" element={<LoginPageContainer />} />
                    <Route path="/" element={<LoginPageContainer />}/>
                    <Route path="/home" element={<HomePageContainer />}/>
                    <Route path="/register" element={<RegisterContainer />} />
                    <Route path="/neumonia" element={<NeumoniaContainer/>} />
                    <Route path="/neumotorax" element={<NeumotoraxContainer/>} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;