import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

export const Modal = ({children, onClose, visible}) => (
    <Fragment>
        {
            visible ? (
                <div className="ModalWrapper">
                    <div className="backdrop"></div>
                    <div 
                        className="modal"
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
            ) : null
        }
    </Fragment>
)

Modal.propTypes = {
    visible: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element
}