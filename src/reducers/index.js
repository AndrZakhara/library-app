import { combineReducers } from 'redux';
import { loginFormReducer } from './loginForm';
import { reducer as formReducer } from 'redux-form';


export const rootReducer = combineReducers({
    loginForm: loginFormReducer,
    form: formReducer,
})