import { call, put, takeLatest, select } from 'redux-saga/effects'
import { Api } from '../../api'

function* getMembers({ page }) {
    const {data, error} = yield call(Api.getMembers)
    if(data){
        console.log('response', data)
    } else {
        console.log('error', error)
    }
}


function* mySaga() {
    yield takeLatest('GET_MEMBERS', getMembers);
}

export default mySaga
