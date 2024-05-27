import React from 'react';
import ApTasks from '../../imgs/Projetos/ApTasks.png';
import Appkam from '../../imgs/Projetos/Appkam.png';
import Myshop from '../../imgs/Projetos/Myshop1.png';
import AgProd from '../../imgs/Projetos/AgProd.png';

export default function Label(params) {
    return (
        <>
            <label className="badge badge-warning ml-2">
                <a href="https://github.com/derio123/ApTasks">
                    <img src={ApTasks} alt="ApTasks" />
                    Aptasks</a>
            </label>
            <label className="badge badge-warning ml-2">
                <a href="https://github.com/derio123/ApFinancas19">
                    <img src={Appkam} alt="Appkam" />
                    Appkam
                </a>
            </label>

            <label className="badge badge-warning ml-2">
                <a href="https://github.com/derio123/Myshop">
                    <img src={Myshop} alt="Loja de Surf" />
                    Myshop
                </a>
            </label>
            <label className="badge badge-warning ml-2">
                <a href="https://github.com/derio123/AgenciaProducts">
                    <img src={AgProd} alt="Produtos " />
                    AgenciaProducts
                </a>
            </label>
            <h3 className="text-center">
                <label className="badge badge-warning ml-2" htmlFor=''>Em breve novos projetos</label>
            </h3>
        </>
    );
}