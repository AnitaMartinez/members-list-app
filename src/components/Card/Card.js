import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

export const Card = ({member, onClick}) => {
    return (
      <button className="Card" onClick={onClick}>
        <div className="top-card">
          <img className="image" src={`${member.image}`} alt={`${member.name}`}></img>
          {
              member.name ? <p>{member.name}</p> 
                : <p className="replacement-text">Sorry, name not available!</p> 
          }
        </div>
        <div className="bottom-card"> 
          {
              member.age ? <p>{`${member.age} years old`}</p>
                : <p className="replacement-text">Sorry, years not available!</p> 
          }
        </div>
      </button>
    )
}

Card.propTypes = {
  member: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
  onClick: PropTypes.func.isRequired
}