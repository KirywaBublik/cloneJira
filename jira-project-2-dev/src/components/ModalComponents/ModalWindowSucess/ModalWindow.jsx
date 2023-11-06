import React, {useEffect, useState} from 'react';
import "./ModalWindow.scss"

const ModalWindow = (props) => {
    const [showModal, setShowModal] = useState(false);
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowModal(true);
        }, 0);

        return () => clearTimeout(timer);
    })
    return (
        <>
            {showModal && (
                <div className={`modal__wrapper ${props.isOpenned ? "open" : "close"}`} style={{...props.style}}>
                    <div className="modal__body">
                        {props.children}
                    </div>
                </div>
            )}
        </>
    )
};

export default ModalWindow;