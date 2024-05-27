import React from 'react';
import perfil from '../../imgs/deri2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import { faCalendar, faEnvelope, faFile, faGlobe, faHome, faLaptopCode, faMousePointer, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

fontawesome.library.add(faCalendar, faEnvelope, faFile, faGlobe, faHome, faLaptopCode, faMousePointer, faUserGraduate);

export default function Profile() {
    return (
        <>
            <div className="w3-third">
                <div className="w3-transparent w3-card-4" id='#profile'>
                    <div className="w3-container">
                        <img className="profile" src={perfil} alt="Foto de Dério" />
                        <div className="text-center">
                            <h2 className="">Dério Matheus</h2>
                        </div>
                    </div>
                    <div className="w3-container">
                        <div className="w3-large w3-text-theme mb-2">
                            <FontAwesomeIcon icon={faLaptopCode} size={'2x'}
                                className="w3-text-blue mr-3" />
                            Desenvolvedor FullStack
                        </div>
                        <div className="w3-large w3-text-theme mb-2">
                            <FontAwesomeIcon icon={faHome} size={'2x'}
                                className="w3-text-blue mr-3" />
                            Brasilia, BR
                        </div>

                        <div className="w3-large w3-text-theme mb-2">
                            <FontAwesomeIcon icon={faWhatsapp} size={'2x'} className="w3-text-blue mr-3" />
                            <a className="font-weight-bold" style={{ fontSize: '18px' }} href="https://wa.me/qr/YR2BMC27IAF3L1">
                                WhatsApp
                            </a>
                        </div>

                        <div className="w3-large w3-text-theme mb-2">
                            <FontAwesomeIcon icon={faEnvelope} size={'2x'} className="w3-text-blue mr-3" />
                            deriomatheus6@gmail.com
                        </div>

                        <div className="w3-large w3-text-theme mb-2">
                            <FontAwesomeIcon icon={faUserGraduate} size={'2x'}
                                className="w3-text-blue mr-3" />
                            Formação - <b>Faculdade JK</b>
                        </div>


                        <div className="w3-large w3-text-theme mb-2">
                            <FontAwesomeIcon icon={faCalendar} size={'2x'} className="w3-text-blue mr-3" />

                            <span className="w3-tag w3-yellow w3-round ">Fev 2016</span> • <span className="w3-tag w3-yellow w3-round ">Jun 2018</span>

                            <label className="badge badge-warning ml-2">
                                Análise e Desenvolvimento de Sistemas
                            </label>
                        </div>
                        <hr />

                        <div className="w3-large w3-text-theme ">
                            <b><FontAwesomeIcon icon={faGlobe} size={'2x'} className="fa fa-globe fa-2x fa-fw w3-margin-right w3-text-blue " />
                                Idiomas
                            </b>
                        </div>

                        <div className="w3-transparent w3-round-xlarge w3-transparent mb-2">
                            <p className="w3-margin-center ">Inglês</p>
                            <div className="w3-container w3-center w3-round-xlarge progress-bar progress-bar-striped bg-warning"
                                style={{ width: '53%' }}>53%</div>
                        </div>
                        <div className="w3-transparent w3-round-xlarge mb-2">
                            <p>Espanhol</p>
                            <div className="w3-container w3-center w3-round-xlarge progress-bar progress-bar-striped bg-warning"
                                style={{ width: '48%' }}>48%</div>
                        </div>
                        <div className="w3-transparent w3-round-xlarge">
                            <p>Japonês</p>
                            <div className="w3-container w3-center w3-round-xlarge progress-bar progress-bar-striped bg-warning"
                                style={{ width: '15%' }}>15%</div>
                        </div>

                        <hr />
                    </div>
                    <div className="w3-container w3-card w3-transparent">
                        <FontAwesomeIcon icon={faFile} size={'2x'} className="fa fa-angle-double-down w3-text-blue mr-3" />
                        <strong className="mr-2">Baixe meu CV atualizado:</strong>
                        <p>
                            <a className='btn' data-toggle="modal" data-target="#curriculocv" aria-hidden="true" href="#curriculocv">
                                <label className="badge badge-warning" style={{ cursor: 'pointer' }}>
                                    <FontAwesomeIcon icon={faMousePointer} size={'3x'}
                                        className="w3-text-blue ml-2" color={'black'} />
                                    Versão PDF
                                </label>
                            </a>
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}