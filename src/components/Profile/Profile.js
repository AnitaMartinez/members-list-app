import React, { Fragment }  from 'react'
import PropTypes from 'prop-types'
import './Profile.scss'

export const Profile = ({content}) => (
    <div className="Profile">
        <div className="top-container">
          <img className="image" src={`${content.image}`} alt={`${content.name}`}></img>
          <div className="content-text">
            {
                content.name ? (
                  <p>
                    <span className="featured-text">Name: </span>
                    {content.name}
                  </p>
                ) : ( 
                  <p className="replacement-text">Sorry, name not available!</p> 
                )
            }
            {
                content.age ? (
                  <p>
                    <span className="featured-text">Age: </span>
                    {content.age}
                  </p>
                ) : ( 
                  <p className="replacement-text">Sorry, age not available!</p> 
                )
            }
          </div>
        </div>
        {
                content.bio ? (
                  <Fragment>
                    <p className="featured-text bio">Bio</p>
                    <p>{content.bio}</p>
                  </Fragment>
                ) : ( 
                  <p className="replacement-text">Sorry, bio not available!</p> 
                )
            }
    </div>
)

Profile.propTypes = {
  content: PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    bio: PropTypes.string,
    age: PropTypes.number,
  }).isRequired,
}