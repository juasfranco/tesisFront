import React from "react";
import { Link } from "react-router-dom";
import neumoniaImg from "../assets/images/neumonia.png";
import neumoToraxImg from "../assets/images/neumoT.png";

const Menu = () => {
    return (
        <>
            <div className="navMenuCont">
                <div className="cc">
                    <nav id="cc" className="navbar navbar-dark">
                        <div className="container-fluid">
                            <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas"
                                data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="offcanvas offcanvas-start" tabIndex="-1" id="offcanvasNavbar"
                                aria-labelledby="offcanvasNavbarLabel">
                                <div className="offcanvas-header">
                                    <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas"
                                        aria-label="Close"></button>
                                </div>
                                <div className="offcanvas-body menuBody">
                                    <ul className="navbar-nav optionsCont">
                                        <li className="nav-item navOptionrow">
                                            <div className="optIconCont">
                                                <i className="fas fa-id-card"></i>
                                            </div>
                                            <div className="btnTextContainer">
                                                <Link to="/home">
                                                    <button className="menuBtnOptionCont" href="/home">
                                                        <h2 className="menuOptionText">Perfil</h2>
                                                    </button>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="nav-item navOptionrow">
                                            <div className="optIconCont">
                                                <img className="nemoniaImg" src={neumoniaImg} alt="neumonia" />
                                            </div>

                                            <div className="btnTextContainer">
                                                <Link to="/neumonia">
                                                    <button className="menuBtnOptionCont" href="/neumonia">
                                                        <h2 className="menuOptionText">Neumonía</h2>
                                                    </button>
                                                </Link>
                                            </div>
                                        </li>
                                        <li className="nav-item navOptionrow">
                                            <div className="optIconCont">
                                                <img className="nemoniaImg" src={neumoToraxImg} alt="neumonia" />
                                            </div>
                                            <div className="btnTextContainer">
                                                <Link to="/neumotorax">
                                                    <button className="menuBtnOptionCont" href="/neumotorax">
                                                        <h2 className="menuOptionText">Neumotórax</h2>
                                                    </button>
                                                </Link>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div className="menuBottom">
                                    <Link className="linkText" to="/login">
                                        <button className="logOutBtnCont">
                                            <i className="fas fa-sign-out-alt"></i>
                                            <h3 className="logOutBtnText">Cerrar sesión</h3>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </nav>
                </div>
                <div className="navLogoCont">
                    <i className="fas fa-lungs"></i>
                </div>
            </div>
        </>
    );
}
export default Menu;