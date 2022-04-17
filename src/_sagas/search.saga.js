import {put,call,takeLatest,all} from 'redux-saga/effects'
import {searchService} from '../_services/search.service'
import {searchConstants} from '../_constants'
import {filterSuccess, filterFailure, filterRequest} from '../_actions/'

//Worker Sagas
function* loadSearch({term}){
    try {
        yield put(filterRequest())
        const result = yield call(searchService.filter, term)
        console.log("result",result);
        yield put(filterSuccess(result))

    } catch (e) {
        yield put(filterFailure(e))
    }

}

//Watcher Sagas
function* watchLoadSearch(){
    yield  takeLatest(searchConstants.SEARCH_FILTER_INIT,loadSearch)
}

export function* searchSaga(){
    yield all([
        watchLoadSearch()
    ])
}