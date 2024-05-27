import { faAngleDoubleDown, faAsterisk, faBriefcase, faCalendar, faMobile, faServer, faWindowRestore, faMousePointer } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import React from 'react';

fontawesome.library.add(faAngleDoubleDown, faAsterisk, faBriefcase, faCalendar, faMobile, faServer, faWindowRestore, faMousePointer);

export default function LearnExperience(params) {
    return (
        <>
            <div className="w3-twothird">
                <div className="w3-container w3-card w3-transparent w3-margin-bottom">
                    <h2 className="w3-text-theme w3-padding-16 ">
                        <FontAwesomeIcon icon={faAsterisk} size={'2x'}
                            className="fa-fw w3-margin-right w3-xxlarge w3-text-blue " />
                        Projetos
                    </h2>

                    <div className="projects">
                        <div data-toggle="modal" data-target="#mobile" title="clique aqui"
                            className="w3-transparent w3-round-xlarge w3-small">
                            <FontAwesomeIcon icon={faMobile} size={'2x'} id="teste" className="fas fa-mobile fa-5x" />
                            <p className="text-center">Aplicativos</p>
                        </div>
                        <div data-toggle="modal" data-target="#frontend" title="clique aqui"
                            className="w3-transparent w3-round-xlarge w3-small">
                            <FontAwesomeIcon icon={faWindowRestore} size={'2x'} id="teste" className="fa fa-window-restore fa-5x" />
                            <p className="text-center">Web</p>
                        </div>

                        <div data-toggle="modal" data-target="#backend" title="clique aqui"
                            className="w3-transparent w3-round-xlarge w3-small">
                            <FontAwesomeIcon icon={faServer} size={'2x'} id="teste" className="fa fa-server fa-5x" />
                            <p className="text-center">APIs</p>
                        </div>
                    </div>
                </div>


                <div className="w3-container w3-card w3-transparent w3-margin-bottom ">
                    <h2 className="w3-text-theme w3-padding-16 ">
                        <FontAwesomeIcon icon={faBriefcase} size={'2x'}
                            className="fa-fw w3-margin-right w3-xxlarge w3-text-blue " />
                        Experiência
                    </h2>
                    <div className="w3-container ">
                        <h5 className="w3-text-theme "><b>Desenvolvedor FullStack/ Search</b></h5>
                        <h6>
                            <FontAwesomeIcon icon={faCalendar} size={'2x'} className="fa fa-calendar fa-2x fa-fw w3-margin-right w3-text-blue" />
                            <span className="w3-tag w3-yellow w3-round ">Abr 2022</span> • <span className="w3-tag w3-yellow w3-round ">Mar 2023</span>
                        </h6>
                        <p> Atividades: Prestação de serviços voltados para o desenvolvimento de aplicações e
                            portais em Angular vistorias e para o aplicativo sível feito ionic de integrado com API
                            em java utilizando spring, Lifecycle e lazy load.
                            outros.
                        </p>
                        <hr />
                    </div>

                    <div className="w3-container ">
                        <h5 className="w3-text-theme "><b>Desenvolvedor Mobile / 4Quality </b></h5>
                        <h6>
                            <FontAwesomeIcon icon={faCalendar} size={'2x'} className="fa fa-calendar fa-2x fa-fw w3-margin-right w3-text-blue" />
                            <span className="w3-tag w3-yellow w3-round ">Dez 2021</span> • <span className="w3-tag w3-yellow w3-round ">Jan 2022</span>
                        </h6>
                        <p> Prestação de serviços voltados para o desenvolvimento mobile em
                            React native e para o aplicativo do detran do Acre integrado com API em java
                            utilizando hooks, use state e use effect.
                        </p>
                        <hr />
                    </div>

                    <div className="w3-container ">
                        <h5 className="w3-text-theme "><b>Desenvolvedor PHP / Ambplan </b></h5>
                        <h6><FontAwesomeIcon icon={faCalendar} size={'2x'} className="fa fa-calendar fa-2x fa-fw w3-margin-right w3-text-blue" />
                            <span className="w3-tag w3-yellow w3-round ">Out 2021</span> • <span className="w3-tag w3-yellow w3-round ">Nov 2021</span>
                        </h6>
                        <p> Descrição dos Serviços de atualização, melhoria, manutenção e
                            Desenvolvimento do sistema Amblegis que automatiza os requisitos legais
                            aplicáveis, com ambiente php 7.2, Infraestrutura de orquestração docker em
                            contêiner, mysql utilizando o datatables.
                        </p>
                        <hr />
                    </div>

                    <div className="w3-container">
                        <h5 className="w3-text-theme "><b>Assistente de Desenvolvimento PHP / Ministerio da Economia</b>
                        </h5>
                        <h6><FontAwesomeIcon icon={faCalendar} size={'2x'}
                            className="fa fa-calendar fa-2x fa-fw w3-margin-right w3-text-blue" />
                            <span className="w3-tag w3-yellow w3-round ">Fev 2020</span> • <span className="w3-tag w3-yellow w3-round ">Abril 2020</span>
                        </h6>
                        <p>Projetos de ouvidoria, criando e dando suporte aos usuários que precisa de soluções que
                            atenda suas necessidades, além de desenvolvimento e manutenção em
                            sistemas utilizando PHP 7.1 com framework laravel e nodejs no desenvolvimento do
                            sistema de patrimônio, com mysql para utilização de sistemas da ouvidoria.
                        </p>
                    </div>

                    <div className="w3-container ">
                        <h5 className="w3-text-theme "><b>Estágiario Front-end / Inep</b></h5>
                        <h6><FontAwesomeIcon icon={faCalendar} size={'2x'}
                            className="fa fa-calendar fa-2x fa-fw w3-margin-right w3-text-blue" />
                            <span className="w3-tag w3-yellow w3-round ">Jun 2019</span> • <span className="w3-tag w3-yellow w3-round ">Fev 2020</span>
                        </h6>
                        <p> Estagiário de desenvolvimento de aplicações web com linguagens PHP
                            e Java, auxiliando em projetos da DGP na equipe de arquitetura de projetos como
                            enem, inep carreira e enade. Outras ferramentas foram utilizadas como criação de
                            aplicativos em angular, Ionic, com utilização bancos dados mysql; Orquestração com
                            ferramentas de integração contínua com Jenkins, SSO e openshift. Já dentro do
                            time de arquitetos o uso de metodologias ágeis é comum, como também nos testes
                            unitários com karma e Jasmine; Criação de API com backend java e front-end
                            Angular e React, como também Nodejs.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}