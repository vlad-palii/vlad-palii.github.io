import React, { useState } from 'react';
import Modal from 'react-modal';
import './../App.scss';

export default function ModalComponent(props) {
    let [modalState, setModal] = useState(false);
    let [cliksAMount, setCliksAMount] = useState(0);
    // classnameProp = {}
    function closeModal() {
        setModal(false);
    }
    function openModal() {
        setModal(true);
        cliksAMount++;
        console.log(cliksAMount)
    }

    return (
        <div>
            <div className={props.classnameProp} onClick={openModal}>{props.btnText}</div>
            <Modal
                ariaHideApp={false}
                isOpen={modalState}
                contentLabel="Minimal Modal Example">
                    <div className={props.idProp + ' modal-content'}  >
                        <img className="modal-image" src={props.imageProp}></img>
                        <p className="modal-description">
                            {props.descriptionProp}
                        </p>
                    </div>
                <div className="close-button" onClick={closeModal}>X</div>
            </Modal>
        </div>
    )

}
