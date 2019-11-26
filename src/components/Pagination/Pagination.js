import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.scss'
import { ReactComponent as ArrowLeft } from '../../assets/icons/arrow-left.svg'
import { ReactComponent as ArrowRight } from '../../assets/icons/arrow-right.svg'

export const Pagination = ({onChangePage, currentPage, pages}) => {
    const isFirstPage = currentPage === 1
    const hasMorePages = currentPage === pages

    return (
        <div className="Pagination">
            <button 
                onClick={() => onChangePage({pagination: {previous: true}})} 
                disabled={isFirstPage}
            >
                <ArrowLeft 
                    title="Arrow left" 
                    className={`arrow ${isFirstPage ? 'disabled': ''}`}
                />
            </button>
            <span className="text">{`Page ${currentPage}`}</span>
            <button 
                onClick={() => onChangePage({pagination: {next: true}})} 
                disabled={hasMorePages}
            >
                <ArrowRight 
                    title="Arrow right" 
                    className={`arrow ${hasMorePages ? 'disabled': ''}`}
                />
            </button>
        </div>
    )
}

Pagination.propTypes = {
    onChangePage: PropTypes.func.isRequired,
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.oneOf([null])
    ])
}

Pagination.defaultProps = {
    currentPage: 1
}