import React, { Fragment, useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

export const Modal = ({children, onClose, visible}) => {

    const [shouldRender, setRender] = useState(visible)

    useEffect(() => {
        if (visible) setRender(true);
      }, [visible])

    const onAnimationEnd = () => {
    if (!visible) setRender(false);
    }

    return (
            <Fragment>
            {
                shouldRender ? (
                    <div className="ModalWrapper">
                        <div 
                            className="backdrop"
                            style={{ animation: `${visible ? "backdropIn" : "backdropOut"} .3s` }}
                        >
                        <div 
                            className="modal"
                            style={{ animation: `${visible ? "modalIn" : "modalOut"} .3s` }}
                            onAnimationEnd={onAnimationEnd}
                        >
                            <div className="content">
                                <div>
                                    {children}
                                </div>
                                <div className="container-btn">
                                    <button 
                                        onClick={onClose} 
                                        className="btn-close"
                                    >
                                        Close
                                    </button>
                                </div>
                            </div>
                        </div>
                        
                        </div>
                    </div>
                ) : null
            }
        </Fragment>
    )
}

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element
}