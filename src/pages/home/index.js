import React from 'react';
import "./style.css";
import Profile from '../../components/profile/profile';
import LearnExperience from '../../components/learnexperience/learnexpeirence';
import ModalCV from '../../components/modalCV/modalCV';
import ModalMobile from '../../components/modalMobile/modalMobile';
import ModalFrontEnd from '../../components/modalFrontEnd/modalFrontEnd';
import ModalBackEnd from '../../components/modalBackEnd/modalBackEnd';

export default function Home() {
    return (
        <>
            <div className="container sec">
                <section className="sec">
                    <div className=" container margin-top" id="CV">
                        {/* <!-- The Grid --> */}
                        <div className="w3-row-padding">
                            <Profile />
                            <LearnExperience />
                        </div>
                    </div>
                    <ModalCV />

                    <ModalMobile />

                    <ModalFrontEnd />

                    <ModalBackEnd />

                </section >
            </div>
        </>
    );
}
