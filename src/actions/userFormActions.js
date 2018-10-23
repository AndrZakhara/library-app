export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAIL = 'LOGIN_FAIL';
export const ENTRY_TYPE_LOGIN = 'ENTRY_TYPE_LOGIN';
export const ENTRY_TYPE_SIGNUP = 'ENTRY_TYPE_SIGNUP';


export const REGISTRY_REQUEST = 'REGISTRY_REQUEST';
export const REGISTRY_SUCCESS = 'REGISTRY_SUCCESS';
export const REGISTRY_FAIL = 'REGISTRY_FAIL';

export const LOGOUT = 'LOGOUT';

export function handleLogin() {    
    return dispatch => {
        dispatch({
            type: LOGIN_REQUEST,
        });

        // function for request data from server

        if (true) {
            let username = 'Bob Dortmandt';

            dispatch({
                type: LOGIN_SUCCESS,
                payload: username,
                })
        } else {
            dispatch({
                type: LOGIN_FAIL,
                error: true,
                payload: new Error('Ошибка авторизации'),
            })
        } 
    }
  };

export function handleRegistry() {
    return function(dispatch) {
        dispatch({
            type: REGISTRY_REQUEST,
        })  
      
        if (true) {
            let username = 'Register User';

            dispatch({
                type: REGISTRY_SUCCESS,
                payload: username,
                })
        } else {
            dispatch({
                type: REGISTRY_FAIL,
                error: true,
                payload: new Error('Ошибка авторизации'),
            })
        } 
    }
  }

export function handleLogout() {
    return { type: LOGOUT};
}

export function handleTypePageEntry(value) {
    console.log(value);
    if(value === 'login') {
        return {
            type: ENTRY_TYPE_LOGIN
        }
    } else {
        return {
            type: ENTRY_TYPE_SIGNUP
        }
    }

}