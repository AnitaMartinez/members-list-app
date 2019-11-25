import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { getMembers } from './store/actions'
import { CardsList, Pagination, Modal, Profile } from './components'

const Members = ({getMembers, members, currentPage, pages}) => {

  const [modalVisible, showModal] = useState(false);
  const [currentMember, setCurrentMember] = useState({});


  useEffect((getMembers), [])

  const handleClickCard = member => {
    setCurrentMember(member)
    showModal(!modalVisible) 
  }

  return (
    <div>
      <CardsList members={members} onClickCard={handleClickCard} />
      <Pagination
          onChangePage={getMembers}
          currentPage={currentPage}
          pages={pages}
      />
      <Modal visible={modalVisible} onClose={handleClickCard}>
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
}

const mapStateToProps = (state) => ({
  members: state.members,
  currentPage: state.pagination.currentPage,
  pages: state.pagination.pages,
})

const mapDispatchToProps = (dispatch) => ({
    getMembers: pagination => { dispatch(getMembers(pagination)) },
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Members)

