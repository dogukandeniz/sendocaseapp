import { searchConstants } from '../_constants';

const initialState = {
    loading:false,
    fetched:false,
    items:[],
}

export function search(state = initialState, action) {
    debugger
    switch (action.type) {
        case searchConstants.SEARCH_FILTER_REQUEST:
            return {
                loading: true
            };
        case searchConstants.SEARCH_FILTER_SUCCESS:
            return {
                items: action.result,
                loading:false,
                fetched:true
            };
        case searchConstants.SEARCH_FILTER_FAILURE:
            return {
                error: action.error
            };
        case searchConstants.SEARCH_FILTER_RESET:
            return initialState;

        default:
            return state
    }
}