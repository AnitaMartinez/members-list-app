import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import './Modal.scss'

export const Modal = ({children, onClose, visible}) => {
    return (
    <Fragment>
        {
            visible ? (
                <div className="Modal">
                    <div className="content">
                        <div>
                            {children}
                        </div>
                        <button onClick={onClose}>Close</button>
                    </div>
                    <div className="backdrop" onClick={onClose}></div>
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