import { faFilePdf } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import fontawesome from '@fortawesome/fontawesome';
import React from 'react';
import PDF from '../../docs/curriculo2023.pdf';

fontawesome.library.add(faFilePdf);

export default function ModalCV(params) {
    return (
        <div className="modal fade" id="curriculocv" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel"
            aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content bg-dark">
                    <div className="modal-header">
                        <h4 className="modal-title text-center">
                            <FontAwesomeIcon icon={faFilePdf} size={'5x'}
                                className="fa-fw w3-margin-right w3-xxlarge w3-text-blue " />
                            Curriculo PDF
                        </h4>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-div">
                        <iframe title={'Curriculo'} src={PDF} style={{ border: 'none', width: "750px", height: "780px" }}></iframe>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary"
                            data-dismiss="modal" aria-label="Close">Fechar</button>
                    </div>
                </div>
            </div>
        </div>
    );
}