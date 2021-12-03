import React from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Register = () => {
    const [user, setUser] = React.useState({ email: "", password: "" });
    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        axios
            .post(`https://ptesisbackapi.azurewebsites.net/api/user`, {
                email: user.email,
                password: user.password
            })
            .then((res) => {
                console.log(res);
                if (res != null) {
                    navigate("/login");
                }
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <div className="mainCReg">
                <div className="regFormCard">
                    <form>
                        <div className="LogoCont">
                            <i className="fas fa-lungs"></i>
                            <h1 className="logoTitle">E-health Tesis</h1>
                        </div>
                        <div className="LoginCont">
                            <h3>Registro</h3>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder="Nombres" id="name"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" onChange={(event2) => setUser({ ...user, email: event2.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="contraseña" id="exampleInputPassword1" value={user.password} onChange={(event2) => setUser({ ...user, password: event2.target.value })} />
                            </div>
                            <div className="mb-3">
                                <input type="password" className="form-control" placeholder="confirme su contraseña"
                                    id="exampleInputPassword2" />
                            </div>
                            <div className="formBtnCont">
                                <button type="submit" className="regbtn" onClick={register}>Registrar</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default Register;