import { call, put, takeLatest, select } from 'redux-saga/effects'
import { Api } from '../../api'
import { getNextPage } from '../../utils'

function* getMembers({ pagination, withLoaders }) {
    yield put({type: 'HIDE_GLOBAL_ERROR'})
    if(withLoaders) yield put({type: 'SHOW_GLOBAL_LOADING'})
    const { currentPage, itemsPerPage } = yield select(state => state.pagination)
    const nextPage = getNextPage(pagination, currentPage)
    const { data, error } = yield call(Api.getMembers, { page: nextPage, itemsPerPage })
    if(error) {
        yield put({type: 'SHOW_GLOBAL_ERROR'})
        console.log('Error', error.message)
    } else if (data && data.members && data.pagination) {
        const { members, pagination } = data
        yield put({ 
            type: 'SET_MEMBERS', 
            members, 
            pagination: { page: nextPage, pages: pagination.pages && pagination.pages } 
        })
    }
    yield put({type: 'HIDE_GLOBAL_LOADING'})
}

function* mySaga() {
    yield takeLatest('GET_MEMBERS', getMembers);
}

export default mySaga
