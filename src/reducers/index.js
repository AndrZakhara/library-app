import { combineReducers } from 'redux';
import { registryFormReducer } from './registryForm';
import { loginFormReducer } from './loginForm';
import { reducer as formReducer } from 'redux-form';


export const rootReducer = combineReducers({
    registryForm: registryFormReducer,
    loginForm: loginFormReducer,
    form: formReducer,
})