import React from "react"
import { useLocation } from "react-router-dom";
import Menu from "../../components/Menu"

const Home = () => {  
    return (
        <>
            <Menu></Menu>
            <div className="homePageCont">
                <div className="homeHeaderCont">
                    <div className="homeWelcText">
                        <h1 className="homeMainTitle">
                            Bienvenido
                            <i class="fas fa-notes-medical"></i>
                        </h1>
                    </div>
                </div>
                <div className="homeFooterCont">
                    <div className="homeCardCont">
                        <div className="homeCardBod">
                            <h3 className="homeCardTitle">¿Cómo empezar?</h3>
                            <p className="homeCardParg">
                                Da clic en el menú, ubicado en la esquina superior izquierda y selecciona el timpo de enfermedad que deseas analizar.
                            </p>
                        </div>
                    </div>
                </div>
                <footer>
                    <ul className="social_icons">
                        <li><a href="#"><i class="fab fa-facebook"></i></a></li>
                        <li><a href="https://www.ucatolica.edu.co/portal/"><i class="fas fa-university"></i></a></li>
                        <li><a href="#"><i class="fab fa-linkedin"></i></a></li>
                        <li><a href="https://github.com/jsbd10/ThesisPrediction"><i class="fab fa-git-alt"></i></a></li>
                    </ul>
                    <p className="footText">© Ehealth Tesis 2021 | Universidad Católica de Colombia </p>
                </footer>
            </div>
        </>
    );
}

export default Home;





