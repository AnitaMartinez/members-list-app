import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMembers } from './store/actions'
import { CardsList } from './components'

const Members = ({getMembers, members}) => {

  useEffect((getMembers), [])

  return (
    <div>
      <CardsList members={members}/>
    </div>
  );
}

Members.propTypes = {
    getMembers: PropTypes.func.isRequired,
    members: PropTypes.arrayOf(PropTypes.object).isRequired,
}

const mapStateToProps = (state) => ({
  members: state.members,
})

const mapDispatchToProps = (dispatch) => ({
    getMembers: pagination => { dispatch(getMembers(pagination)) },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)

