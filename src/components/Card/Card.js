import React from 'react'
import PropTypes from 'prop-types'
import './Card.scss'

export const Card = ({member}) => {
    return (
      <button className="Card">
        <div className="top-card">
          <img className="image" src={`${member.image}`} alt={`${member.name}`}></img>  {/* TODO: Default image */}
          {
              member.name && <p>{member.name}</p> 
          }
        </div>
        <div className="bottom-card"> 
          {
              member.age && <p>{`${member.age} years old`}</p>
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
}