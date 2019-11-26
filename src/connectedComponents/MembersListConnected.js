import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMembers } from '../store/actions'
import { CardsList, Pagination, Modal, Profile } from '../components'
import Spinner from '../assets/icons/spinner.svg'

const Members = ({getMembers, members, currentPage, pages, loading, error}) => {

  const [modalVisible, showModal] = useState(false);
  const [currentMember, setCurrentMember] = useState({});
  
  const fetchMembers = () => {
    getMembers({withLoaders: true})
  } 

  useEffect((fetchMembers), [])

  const handleClickCard = member => {
    setCurrentMember(member)
    showModal(!modalVisible) 
  }

  const handleClickModal = () => {
    showModal(!modalVisible) 
  }

  if(loading) {
    return (
      <div className="Spinner">
        <img src={Spinner} alt="spinner" className="content"></img>
      </div>
    )
  }
  if(error) {
    return (
      <div>
        <p>Lo sentimos, ha ocurrido un error</p>
      </div>
    )
  }
  return (
    <div>
      <CardsList members={members} onClickCard={handleClickCard} />
      <Pagination
          onChangePage={getMembers}
          currentPage={currentPage}
          pages={pages}
      />
      <Modal visible={modalVisible} onClose={handleClickModal}>
        <Profile content={currentMember}/>
      </Modal>
    </div>
  );
}

Members.propTypes = {
    getMembers: PropTypes.func.isRequired,
    members: PropTypes.arrayOf(PropTypes.object).isRequired,
    currentPage: PropTypes.number.isRequired,
    pages: PropTypes.oneOfType([
      PropTypes.number,
      PropTypes.oneOf([null])
    ]),
    loading: PropTypes.bool.isRequired,
    error: PropTypes.bool.isRequired,
}

const mapStateToProps = (state) => ({
  members: state.members,
  currentPage: state.pagination.currentPage,
  pages: state.pagination.pages,
  loading: state.loading,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
    getMembers: ({pagination, withLoaders}) => { dispatch(getMembers({pagination, withLoaders})) },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)

