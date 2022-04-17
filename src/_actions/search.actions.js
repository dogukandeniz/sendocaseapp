import { searchConstants } from '../_constants';
import { alertActions } from './';
import { searchService } from '../_services/search.service';




export const resetSearchFilter = () =>{

    return { type: searchConstants.SEARCH_FILTER_RESET }

}

export const initSearchFilter = (term) =>{
     return { type: searchConstants.SEARCH_FILTER_INIT,term }
}



export const filterRequest = () =>{return { type: searchConstants.SEARCH_FILTER_REQUEST } }
export const filterSuccess = (result) =>{return { type: searchConstants.SEARCH_FILTER_SUCCESS, result } }
export const filterFailure = (error) =>{return { type: searchConstants.SEARCH_FILTER_FAILURE, error } }



