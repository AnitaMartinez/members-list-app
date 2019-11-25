import React from 'react'
import PropTypes from 'prop-types'
import { Card } from '../index'
import './CardsList.scss'

export const CardsList = ({members, onClickCard}) => {
 
    return (
        <div className="CardsList">
            {
                members.length > 0 && members.map(member => (
                    <Card member={member} key={member.id} onClick={() => onClickCard(member)} />
                ))
            }
        </div>
    )
}

CardsList.propTypes = {
    members: PropTypes.arrayOf(PropTypes.object).isRequired,
    onClickCard: PropTypes.func.isRequired
}