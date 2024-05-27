import React from 'react';

import { faEnvelope, faMapMarker } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';

fontawesome.library.add(faEnvelope, faMapMarker);

export default function Footer(params) {
    return (
        <>
            <footer className="w3-container card-footer w3-theme-d5 w3-padding-16 w3-text w3-center " id="contact">
                <div className="w3-section w3-large ">
                    <div className="mb-1">
                        <FontAwesomeIcon icon={faMapMarker} size={'2x'} />Brasilia-DF, BR
                    </div>
                    <div className="mb-1">
                        <a href="https://www.youtube.com/channel/UCbeEe9Dtp2e_XA_qy_tJgqw?view_as=subscriber" target="_blank ">
                            <FontAwesomeIcon icon={faYoutube} size={'2x'} className="ml-2"/>
                        </a>
                        <a href="https://twitter.com/derio_math " target="_blank ">
                            <FontAwesomeIcon icon={faTwitter} size={'2x'} className="ml-2"/>
                        </a>
                        <a href="https://www.facebook.com/derio.matheus " target="_blank ">
                            <FontAwesomeIcon icon={faFacebook} size={'2x'} className="ml-2"/>
                        </a>
                        <a href="https://www.instagram.com/derio_matheus789/ " target="_blank ">
                            <FontAwesomeIcon icon={faInstagram} size={'2x'} className="ml-2" />
                        </a>
                        <a href="mailto:deriomatheus6@gmail.com">
                            <FontAwesomeIcon icon={faEnvelope} size={'2x'} className="ml-2 w3-text-blue" />
                        </a>
                    </div>
                    <div className="mb-2">
                    <label htmlFor="copy" className="ml-2">Versão V_11</label>
                        <small className="ml-2" id="copy">&copy;DERX 2021</small>
                    </div>
                </div>
            </footer>
        </>
    );
}