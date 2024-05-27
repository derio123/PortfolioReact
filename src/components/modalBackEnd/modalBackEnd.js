import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faJava, faNodeJs, faPhp } from '@fortawesome/free-brands-svg-icons';
import ModalFooter from '../modalFooter/modalFooter';
import { faServer } from '@fortawesome/free-solid-svg-icons';
import ninjas from "../../imgs/Projetos/ninjas.png";
import syspat from "../../imgs/Projetos/syspat.png";

fontawesome.library.add(faJava, faNodeJs, faPhp);
export default function ModalBackEnd(params) {
    return (
        <div className="modal fade" id="backend" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h4 className="modal-title text-center">
                            <FontAwesomeIcon icon={faServer} size={'2x'}
                                className="fa-fw w3-margin-right fa-2x w3-text-blue" />
                            Projetos Backend
                        </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ">
                        <button className="btn btn-outline-warning col-3 ml-3 text-center" title="clique aqui" type="button"
                            data-toggle="collapse" href="#php" aria-expanded="false"
                            aria-controls="ionic">
                            <FontAwesomeIcon icon={faPhp} size={'5x'}
                                className="fa-2x w3-text-blue" />
                        </button>
                        <div className="collapse w3-padding-8" id="php">
                            <div className="row w3-justify">
                                <br />
                                <label className="badge badge-warning ml-2">
                                    <a href="https://github.com/derio123/Sispatrimonio">
                                        <img src={syspat} alt="Sistema de Sispatrimonio" />
                                        Sispatrimonio
                                    </a>
                                </label>
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
                                </h3>
                            </div>
                        </div>

                        <button className="btn btn-outline-warning ml-3 col-3 text-center" title="clique aqui" type="button"
                            data-toggle="collapse" href="#rn">
                            <FontAwesomeIcon icon={faNodeJs} size={'5x'}
                                className="w3-text-blue" />
                        </button>

                        <div className="collapse list-group w3-padding-8" id="rn">
                            <div className="row w3-justify">
                                <br />
                                <label className="badge badge-warning ml-2">
                                    <a href="https://github.com/derio123/Delifood">
                                        <img src={''} alt="Api de Delifood" />Delifood
                                    </a>
                                </label>
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
                                </h3>
                            </div>
                        </div>

                        <button className="btn btn-outline-warning col-3 ml-3 text-center" title="clique aqui" type="button"
                            data-toggle="collapse" href="#java">
                            <FontAwesomeIcon icon={faJava} size={'5x'}
                                className="w3-text-blue" title='Java' />
                        </button>
                        <div className="collapse w3-padding-8" id="java">
                            <div className="row w3-justify">
                                <br />
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2">
                                        <a href="https://github.com/derio123/Ninjas2D" >
                                            <img src={ninjas} alt="Sistema de Sispatrimonio" />Ninjas
                                        </a>
                                    </label>
                                </h3>
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <ModalFooter />
                </div>
            </div>
        </div >
    );
}