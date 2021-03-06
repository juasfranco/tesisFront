import React from "react";
import axios from "axios";
import Menu from "../../components/Menu.js"
import neumotoraxImg from "../../assets/images/infoneumotorax.png";

const Neumotorax = () => {
    const [img, setImg] = React.useState();
    const [pat, setpat] = React.useState();

    function uploadImage(event) {
        event.preventDefault();
        var formData = new FormData();
        formData.append("ImageFile", img);
        axios.post(`https://ptesisbackapi.azurewebsites.net/api/image/upload`, formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
            .then((res) => {
                console.log(res);
                if (res != null) {
                    const { uploadedUrl } = res.data.toPredictImage
                    console.log(uploadedUrl)
                    predict(uploadedUrl)
                }
            })
            .catch((err) => {
                console.log(err);
            });

    }

    function predict(imgUrl) {
        console.log("predict")
        console.log(imgUrl)
        axios
            .post(`https://thesis2021.herokuapp.com/predecirneumotorax?imagen=${imgUrl}`)
            .then((res) => {
                console.log(res);
                const {diagnostico} = res.data;
                console.log(diagnostico);
                handlepat(diagnostico);
                window.confirm("Revise los resultados");
            })
            .catch((err) => {
                console.log(err);
            });
    }

    const handlepat = (diagnostico) => {
        setpat(diagnostico);
    }

    return (
        <>
            <Menu></Menu>
            <section className="fileUploadCont">
                <div className="left">
                    <div className="fileformCont">
                        <form>
                            <h3>Datos del Paciente</h3>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Nombre del paciente"
                                    id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="Email" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder="edad" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label className="form-label">Seleccione una imagen</label>
                                <input className="form-control" type="file" id="formFile" onChange={(e) => setImg(e.target.files[0])} />
                            </div>

                            <div className="formBtnCont">
                                <button type="submit" className="uploadbtn" onClick={uploadImage}>Hacer predicci??n</button>
                                <button type="button" className="uploadbtn" data-bs-toggle="modal" data-bs-target="#exampleModal" >Ver resultados</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="right">
                    <div className="infoContainer">
                        <div className="infoCard">
                            <h1 className="infoTitle">Neumot??rax</h1>
                            <p className="infoText">
                                El neumot??rax es la presencia de aire en el espacio existente entre los pulmones (espacio
                                pleural), que provoca p??rdida de volumen pulmonar y colapso del lado afectado.
                            </p>
                            <img className="dataInfoImg" src={neumotoraxImg} alt="infoneumotorax" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Resultados de la predicci??n</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h1>
                                    Patolog??a: {pat}
                                </h1>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
export default Neumotorax;
