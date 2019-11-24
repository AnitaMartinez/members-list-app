import React from 'react'
import PropTypes from 'prop-types'
import './Pagination.scss'
import ArrowLeft from '../../assets/images/arrow-left.svg'
import ArrowRight from '../../assets/images/arrow-right.svg'
import ArrowLeftDisabled from '../../assets/images/arrow-left-disabled.svg'
import ArrowRightDisabled from '../../assets/images/arrow-right-disabled.svg'

export const Pagination = ({onChangePage, currentPage, pages}) => {
    const isFirstPage = currentPage === 1
    const hasMorePages = currentPage === pages

    return (
        <div className="Pagination">
            <button 
                onClick={() => onChangePage({previous: true})} 
                disabled={isFirstPage}
                className={isFirstPage ? '' : 'arrow-button'}
            >
                <img 
                    src={isFirstPage ? ArrowLeftDisabled : ArrowLeft } 
                    alt="Arrow left" 
                    className="arrow"
                >
                </img>
            </button>
            <span className="text">{`Page ${currentPage}`}</span>
            <button 
                onClick={() => onChangePage({next: true})} 
                disabled={hasMorePages}
                className={isFirstPage ? '' : 'arrow-button'}
            >
                <img 
                    src={hasMorePages ? ArrowRightDisabled: ArrowRight} 
                    alt="Arrow right" 
                    className="arrow"
                >
                </img>
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