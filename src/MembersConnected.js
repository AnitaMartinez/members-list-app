import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMembers } from './store/actions'

const Members = ({getMembers}) => {

  useEffect((getMembers), [])


  return (
    <div></div>
  );
}

Members.propTypes = {
    getMembers: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
  members: state.members.members,
})

const mapDispatchToProps = (dispatch) => ({
    getMembers: pagination => { dispatch(getMembers(pagination)) }, // TODO: ver si esto es necesario escribirlo así
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)

