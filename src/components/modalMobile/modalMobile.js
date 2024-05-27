import React from 'react';
import Label from '../label/label';
import ModalFooter from '../modalFooter/modalFooter';
import { faMobile } from '@fortawesome/free-solid-svg-icons';
import { faAndroid, faReact } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import ImageShare from '../../imgs/Projetos/ImageShare.png';
import StickerSmash from '../../imgs/Projetos/StickerSmash.png';

fontawesome.library.add(faMobile, faReact, faAndroid);

export default function ModalMobile() {
    return (
        <div className="modal fade" id="mobile" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <FontAwesomeIcon icon={faMobile} size={'5x'}
                            className="w3-xxlarge w3-text-blue" />
                        <h4 className="modal-title text-center ml-2">
                            Projetos Mobile
                        </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body ">
                        <button className="btn btn-outline-warning col-3 ml-3 text-center" title="clique aqui"
                            type="button" data-toggle="collapse" href="#ionic" aria-expanded="false"
                            aria-controls="ionic">
                            <FontAwesomeIcon icon={faMobile} size={'5x'}
                                className="w3-text-blue" />
                            <p className="text-center">Ionic</p> 
                        </button>
                        <div className="collapse w3-padding-8" id="ionic">
                            <div className="row w3-justify">
                                <br />
                                <Label />
                            </div>
                        </div>

                        <button className="btn btn-outline-warning ml-3 col-3 text-center" title="clique aqui"
                            type="button" data-toggle="collapse" href="#rn">
                            <FontAwesomeIcon icon={faReact} size={'5x'} className="w3-text-blue" />
                            <p className="text-center">React Native</p>
                        </button>

                        <div className="collapse list-group w3-padding-8" id="rn">
                            <div className="row w3-justify">
                                <br />
                                <label className="badge badge-warning ml-2">
                                    <a href="https://github.com/derio123/">
                                        <img src={ImageShare}
                                            alt="App de manipular imagens" />ImageShare
                                    </a>
                                </label>
                                <label className="badge badge-warning ml-2">
                                    <a href="https://github.com/derio123/StickerSmash">
                                        <img src={StickerSmash}
                                            alt="App de manipular imagens" />StickerSmash
                                    </a>
                                </label>
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
                                </h3>
                            </div>
                        </div>

                        <button className="btn btn-outline-warning col-3 ml-3 text-center" title="clique aqui" type="button"
                            data-toggle="collapse" href="#android">
                            <FontAwesomeIcon icon={faAndroid} size={'5x'}
                                className="w3-text-blue" />
                            <p className="text-center">Android</p>
                        </button>
                        <div className="collapse w3-padding-8" id="android">
                            <div className="row w3-justify">
                                <br />
                                <h3 className="text-center">
                                    <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
                                </h3>
                                {/*  <!-- <h3 className="text-center"><label className="badge badge-danger ml-2">
                                                <a href="https://github.com/derio123/AppAjudaBrasil"
                                                    target="_blank">AjudaBrasil</a></label>
                                            </h3>
                                            <h3 className="text-center"><label className="badge badge-danger ml-2">
                                                <a href="https://github.com/derio123/ConversaodeMoedas">
                                                    Conversão de Moedas
                                                </a>
                                            </label>
                                            </h3> --> */}
                            </div>
                        </div>
                    </div>
                    <ModalFooter />
                </div>
            </div>
        </div>
    );
}