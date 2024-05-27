import React from 'react';
import Logo from '../../../imgs/pc.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

fontawesome.library.add(faHome, faGithub, faLinkedin);

export default function Header() {
    return (
        <>
            <header className="topo">
                <nav className="content navbar navbar-expand-md navbar-dark">
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03"
                        aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="logo">
                        <a className="navbar-brand" href="#CV">
                            <img src={Logo} alt="Portfolio do Derio" />
                        </a>
                    </div>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item active">
                                <a className="nav-link product" href="#profile">
                                    <FontAwesomeIcon icon={faHome} size={'1x'}
                                        className="Portfólio" />
                                    <label className="ml-1">Inicio</label>
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link product" href="https://github.com/derio123">
                                    <FontAwesomeIcon icon={faGithub} size={'1x'}
                                        className="Portfólio" />
                                    <label className="ml-1">Projetos</label>

                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link product" href="https://www.linkedin.com/in/deriomatheus/">
                                    <FontAwesomeIcon icon={faLinkedin} size={'1x'}
                                        className="Portfólio" id='link' />
                                    <label htmlFor="link" className="ml-1">Linkedin</label>
                                </a>
                            </li>

                            <li className="nav-item">
                                <a className="nav-link product" title="Em breve" href="/">
                                    <i className="fas fa-briefcase Portfólio"></i>
                                    <label htmlFor="" className="ml-1">Serviços</label>
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        </>
    );
}