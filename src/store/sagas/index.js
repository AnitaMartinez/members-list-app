import { call, put, takeLatest, select } from 'redux-saga/effects'
import { Api } from '../../api'
import { getNextPage } from '../../utils'

function* getMembers({ pagination }) {
    const { currentPage, itemsPerPage } = yield select(state => state.pagination)
    const nextPage = getNextPage(pagination, currentPage)
    const { data, error } = yield call(Api.getMembers, { page: nextPage, itemsPerPage })
    if(data && data.members && data.pagination){
        const { members, pagination } = data
        yield put({ 
            type: 'SET_MEMBERS', 
            members, 
            pagination: { page: nextPage, pages: pagination.pages  } 
        })
    } else {
        console.log('Error', error)
    }
}

function* mySaga() {
    yield takeLatest('GET_MEMBERS', getMembers);
}

export default mySaga
