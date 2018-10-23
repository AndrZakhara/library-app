import { 
    LOGIN_REQUEST, 
    LOGIN_SUCCESS, 
    LOGIN_FAIL,
    LOGOUT,
    ENTRY_TYPE_LOGIN,
    ENTRY_TYPE_SIGNUP,
} from '../actions/userFormActions'

const initialState = {
    userName: 'Unknown User',
    isFetching: false,
    isAuth: false,
    error: '',
    entryType: ''
};

export function loginFormReducer(state = initialState, action) {
    switch (action.type) {
        case LOGIN_REQUEST:
            return { ...state, isFetching: true, error: '' };

        case LOGIN_SUCCESS:
            return { ...state, isFetching: false, userName: action.payload, isAuth: true, entryType: '', }

        case LOGIN_FAIL:
            return { ...state, isFetching: false, error: action.payload.message };

        case LOGOUT:
            return { ...state, isAuth: false };

        case ENTRY_TYPE_LOGIN:
            return { ...state, entryType: 'login' };

        case ENTRY_TYPE_SIGNUP:
            return { ...state, entryType: 'signUp' };

        default:
            return state;
    }
} 