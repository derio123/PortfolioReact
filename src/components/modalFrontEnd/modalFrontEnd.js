import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faAngular, faJs, faReact } from '@fortawesome/free-brands-svg-icons';
import ModalFooter from '../modalFooter/modalFooter';
import Tour from '../../imgs/Projetos/TourHeroes.jpeg';
import Byte from '../../imgs/Projetos/bytecode.png';
import Manager from '../../imgs/Projetos/managerFront.png';
import AppPerfil from '../../imgs/Projetos/AppPerfil.png';
import { faWindowRestore } from '@fortawesome/free-solid-svg-icons';

fontawesome.library.add(faJs, faAngular, faReact);
export default function ModalFrontEnd(params) {
    return (
        <div className="modal fade" id="frontend" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <FontAwesomeIcon icon={faWindowRestore} size={'3x'} className="w3-text-blue" />
                        <h4 className="modal-title text-center ml-2">
                            Projetos Frontend
                        </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <button className="btn btn-outline-warning col-3 ml-3 text-center" title="clique aqui"
                            type="button" data-toggle="collapse" href="#ang" aria-expanded="false"
                            aria-controls="ionic">
                            <FontAwesomeIcon icon={faAngular} size={'5x'} className="w3-text-blue" />
                            <p className="text-center">Angular</p>
                        </button>
                        <div className="collapse w3-padding-8" id="ang">
                            <div className="row w3-justify">
                                <br />
                                <h3 className="text-center"><label className="badge badge-warning ml-2">
                                    <img src={Tour} alt="Tour Heroes" />
                                    <a href="https://github.com/derio123/tourHeroes">Tour_Heroes</a></label>
                                </h3>
                                <h3 className="text-center"><label className="badge badge-warning ml-2">
                                    <img src={Byte} alt="Tour Heroes" />
                                    <a href="https://github.com/derio123/people_manager">ByteCode</a></label>
                                </h3>
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
                                </h3>
                            </div>
                        </div>

                        <button className="btn btn-outline-warning ml-3 col-3 text-center" title="clique aqui" type="button"
                            data-toggle="collapse" href="#rn">
                            <FontAwesomeIcon icon={faReact} size={'5x'} className="w3-text-blue" />
                            <p className="text-center">Reactjs</p>
                        </button>

                        <div className="collapse list-group w3-padding-8" id="rn">
                            <div className="row w3-justify">
                                <br />
                                <label className="badge badge-warning ml-2">
                                    <img src={Manager} alt="Perfil_Github" />
                                    <a href="https://github.com/derio123/">
                                        managerFront
                                    </a>
                                </label>
                                <label className="badge badge-warning ml-2">
                                    <img src={AppPerfil} alt="Perfil_Github" />
                                    <a href="https://github.com/derio123/projeto-inicialReactRedux">
                                        Perfil_Github
                                    </a>
                                </label>
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
                                </h3>
                            </div>
                        </div>

                        <button className="btn btn-outline-warning col-3 ml-3 text-center" type="button"
                            data-toggle="collapse" href="#android">
                            <FontAwesomeIcon icon={faJs} size={'5x'} className="w3-text-blue" />
                            <p className="text-center">Nextjs</p>
                        </button>
                        <div className="collapse w3-padding-8" id="android">
                            <div className="row w3-justify">
                                <br />
                                {/* <h3 className="text-center">
                                    <label className="badge badge-danger ml-2">
                                        <a href="https://github.com/derio123/AppAjudaBrasil" target="_blank">AjudaBrasil</a></label>
                                </h3> */}
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
                                </h3>
                            </div>
                        </div>
                    </div>
                    <ModalFooter />
                </div>
            </div>
        </div>
    );
}