import { call, put, takeLatest } from 'redux-saga/effects'
import { Api } from '../../api'

function* getMembers({ page }) {
    const {data, error} = yield call(Api.getMembers)
    if(data && data.members && data.pagination){
        const { members, pagination } = data
        yield put({ type: 'SET_MEMBERS', members, pages: pagination.pages && pagination.pages })
    } else {
        console.log('error', error)
    }
}


function* mySaga() {
    yield takeLatest('GET_MEMBERS', getMembers);
}

export default mySaga
