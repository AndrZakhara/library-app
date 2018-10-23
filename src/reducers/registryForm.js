import { 
    REGISTRY_REQUEST, 
    REGISTRY_SUCCESS, 
    REGISTRY_FAIL,
} from '../actions/userFormActions';

export function registryFormReducer(state = [], action) {
    switch (action.type) {
        case REGISTRY_REQUEST:
            return { ...state, isFetching: true, error: '' }

        case REGISTRY_SUCCESS:
            return { ...state, isFetching: false, name: action.payload }

        case REGISTRY_FAIL:
            return { ...state, isFetching: false, error: action.payload.message }
        
        default:
            return state;
    }
}; 