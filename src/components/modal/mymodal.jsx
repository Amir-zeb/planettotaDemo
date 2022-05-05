import React from 'react';
import { Modal } from 'react-bootstrap';

function MyModal(props) {
    return (
        <Modal
            {...props}
            size={props.size}
            aria-labelledby="contained-modal-title-vcenter"
            className={props.extraclass}
            centered
        >
            <div className="modal_body">
                <span onClick={props.onHide} className='modal_close'>&times;</span>
                {props.bodycontent}
            </div>
        </Modal>
    );
}

export default MyModal;