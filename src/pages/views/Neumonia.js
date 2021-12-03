import React from "react";
import axios from "axios";
import Menu from "../../components/Menu.js"
import neumoniaImg from "../../assets/images/neumonia.jpg";
const Neumonia = () => {

    const [img, setImg] = React.useState();
    const patology = React.useState();

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
            .post(`https://thesis2021.herokuapp.com/predecirneumotorax?imagen=https://pneumotoraximages.blob.core.windows.net/normal/n1.jpeg`)
            .then((res) => {
                console.log(res);
                patology = res;
            })
            .catch((err) => {
                console.log(err);
            });
    }

    return (
        <>
            <Menu></Menu>
            <section class="fileUploadCont">
                <div class="left">
                    <div class="fileformCont">
                        <form>
                            <h3>Datos del Paciente</h3>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Nombre del paciente"
                                    id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="Email" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <input type="email" class="form-control" placeholder="edad" id="exampleInputEmail1"
                                    aria-describedby="emailHelp" />
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Seleccione una imagen</label>
                                <input class="form-control" type="file" id="formFile" onChange={(e) => setImg(e.target.files[0])} />
                            </div>

                            <div class="formBtnCont">
                                <button type="submit" class="uploadbtn" onClick={uploadImage}>Hacer predicción</button>
                                <button type="button" class="uploadbtn" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal">Ver resultados</button>
                            </div>
                        </form>
                    </div>
                </div>
                <div class="right">
                    <div class="infoContainer">
                        <div class="infoCard">
                            <h1 class="infoTitle">Neumonía</h1>
                            <p class="infoText">
                                La neumonía es una infección en uno o ambos pulmones. Causa que los alvéolos pulmonares se
                                llenen de líquido o pus. Puede variar de leve a grave, según el tipo de germen que causa la
                                infección, su edad y su estado general de salud.
                            </p>
                            <img class="dataInfoImg" src={neumoniaImg} alt="infoneumonia" />
                        </div>
                    </div>
                </div>
            </section>
            <section>
                <div class="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                        <div class="modal-content">
                            <div class="modal-header">
                                <h5 class="modal-title" id="exampleModalLabel">Resultados de la predicción</h5>
                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div class="modal-body">
                                <h1>
                                    Patología: {patology}
                                </h1>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Neumonia;

