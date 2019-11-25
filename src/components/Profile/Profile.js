import React from 'react'
import PropTypes from 'prop-types'
import './Profile.scss'

export const Profile = ({content}) => {
    return (
      <div className="Profile">
          <div className="top-container">
            <img className="image" src={`${content.image}`} alt={`${content.name}`}></img>
            <div>
              {
                  content.name ? <p>{`Name: ${content.name}` }</p> 
                    : <p className="replacement-text">Sorry, name not available!</p> 
              }
              {
                  content.age ? <p>{`Age: ${content.age}` }</p> 
                    : <p className="replacement-text">Sorry, age not available!</p> 
              }
            </div>
          </div>
            {
                content.bio ? <p>{`Bio: ${content.bio}` }</p> 
                  : <p className="replacement-text">Sorry, bio not available!</p> 
            }
      </div>
    )
}

Profile.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
}