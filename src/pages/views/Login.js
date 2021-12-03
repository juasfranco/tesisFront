import React from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import lungsImg from "../../assets/images/lungs.jpg"
import doctorImg2 from "../../assets/images/doctorImg2.jpg"
import img3 from "../../assets/images/img3.jpg"

const Login = () => {
    const [user, setUser] = React.useState({ email: "", password: "" });
    const navigate = useNavigate();

    function login(event) {
        event.preventDefault();
        axios
            .post(`https://ptesisbackapi.azurewebsites.net/api/user/authenticate`, {
                email: user.email,
                password: user.password
            })
            .then((res) => {
                console.log(res);
                if (res != null) {
                    navigate("/home", { state: { user } });
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="mainCLog">
                <div className="left">
                    <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={lungsImg} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>First slide label</h5>
                                    <p>Some representative placeholder content for the first slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={doctorImg2} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Second slide label</h5>
                                    <p>Some representative placeholder content for the second slide.</p>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={img3} className="d-block w-100" alt="..." />
                                <div className="carousel-caption d-none d-md-block">
                                    <h5>Third slide label</h5>
                                    <p>Some representative placeholder content for the third slide.</p>
                                </div>
                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="rightL">
                    <div className="formCard">
                        <form>
                            <div className="LogoCont">
                                <i className="fas fa-lungs"></i>
                                <h1 className="logoTitle">E-health Tesis</h1>
                            </div>
                            <div className="LoginCont">
                                <h3>Login</h3>
                                <div className="mb-3">
                                    <input type="email" className="form-control" placeholder="email" id="exampleInputEmail1"
                                        aria-describedby="emailHelp" value={user.email} onChange={(event1) => setUser({ ...user, email: event1.target.value })}
                                    />
                                </div>
                                <div className="mb-3">
                                    <input type="password" className="form-control" placeholder="contraseña"
                                        id="exampleInputPassword1" value={user.password} onChange={(event1) => setUser({ ...user, password: event1.target.value })}
                                    />
                                </div>
                                <div className="formBtnCont">
                                    <button type="submit" className="lgbtn" onClick={login}>Login</button>
                                    <Link to="/register"><button className="regbtn">no tienes una cuenta registrate</button></Link>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Login;
