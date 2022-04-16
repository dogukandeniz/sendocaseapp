import { searchConstants } from '../_constants';
import { alertActions } from './';
import { searchService } from '../_services/search.service';




export const resetSearchFilter = () =>{

    return dispatch => {


        dispatch(clear());


    };

    function clear() { return { type: searchConstants.SEARCH_FILTER_RESET } }



}

export const getFilteredResult = (term) =>{

    return dispatch => {


        dispatch(request());

        searchService.filter(term)
            .then(
                result => {

                    dispatch(success(result));

                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: searchConstants.SEARCH_FILTER_REQUEST } }
    function success(result) { return { type: searchConstants.SEARCH_FILTER_SUCCESS, result } }
    function failure(error) { return { type: searchConstants.SEARCH_FILTER_FAILURE, error } }


}
