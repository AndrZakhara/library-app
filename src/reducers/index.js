import { combineReducers } from 'redux';
import { registryFormReducer } from './registryForm';
import { loginFormReducer } from './loginForm';

export const rootReducer = combineReducers({
    registryForm: registryFormReducer,
    loginForm: loginFormReducer,
})