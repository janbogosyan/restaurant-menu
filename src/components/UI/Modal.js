import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';


const portalElement = document.getElementById('overlays')         //public folder -> index.html над id='root'

const ModalOverlay = props => {
    return (
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>
    );
};

const Backdrop = props => {
    return <div className={classes.backdrop} onClick={props.onCloseCartModal} />
};


const Modal = props => {
    return (
        <Fragment>
            {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
            {ReactDOM.createPortal(<Backdrop onCloseCartModal={props.onCloseCartModal} />, portalElement)}
        </Fragment>
    );
};
export default Modal;