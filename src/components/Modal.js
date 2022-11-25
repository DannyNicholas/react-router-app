import React from "react";
import PortalReactDOM from 'react-dom'
import { Link } from 'react-router-dom';

const Modal = () => {

    return PortalReactDOM.createPortal(
        <div className='ui dimmer show modals visible active'>
            <div className='ui raised very padded text container segment'>
                <h1>I am a modal</h1>
                <Link to='/' className='ui header'>
                    Home
                </Link>
            </div>
        </div>,
        document.querySelector('#modal')
    )
}

export default Modal;