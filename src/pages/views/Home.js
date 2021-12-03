import React from "react"
import { useLocation } from "react-router-dom";
import Menu from "../../components/Menu"

const Home =()=>{
    const location = useLocation();
    const {email} = location.state.user;

    function loog(event) {
        const {email} = location.state.user;
        console.log(email);
    }
    return(
        <>
        <Menu></Menu>
        <div>
            <h1>Bienvenido {email}</h1>
        </div>
        <button onClick={loog}>
            prueba
        </button>
        </>
    );
}

export default Home;





