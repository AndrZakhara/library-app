import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { loginFormReducer } from './loginForm';


export const rootReducer = combineReducers({
  loginForm: loginFormReducer,
  form: formReducer,
});
