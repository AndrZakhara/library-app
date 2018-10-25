import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values, registeredFields) => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 8 || values.username.length < 3) {
        errors.username = 'Must be between 3 and 8 characters';
    }

    // if (!values.email) {
    //     errors.email = 'Required';
    // } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    //     errors.email = 'Invalid email address';
    // }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length > 8 || values.password.length < 3) {
        errors.password = 'Must be between 3 and 8 characters'
    }
    // if (!values.passwordDuplicate) {
    //     errors.passwordDuplicate = 'Required'
    // } else if (values.passwordDuplicate !== values.password) {
    //     errors.passwordDuplicate = 'password must be the same as in the previous field'
    // }
    return errors
};

const renderField = ({
                         input,
                         label,
                         type,
                         meta: { touched, error, warning }
                     }) => (
    <div>
        <label>{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} />
            {touched &&
            ((error && <span>{error}</span>) ||
                (warning && <span>{warning}</span>))}
        </div>
    </div>
);

const authValidationForm = props => {
    const {
        // handleSubmit,
        pristine,
        reset,
        submitting,
        entryType,
        handleLogin,
        formSyncErrors
    } = props;
    // console.log(formSyncErrors);

    const activeButtonSend = (formSyncErrors) => {
        if(formSyncErrors.hasOwnProperty('authValidation')) {
            console.log('authValidation');
            if(formSyncErrors.authValidation.hasOwnProperty('syncErrors')) {
                return false;
            } else return true;
        }
    };

    // console.log(activeButtonSend(formSyncErrors));
    const user = {name: 'Vasya', password: '12345'};

    return (
        <form
            // onSubmit={handleSubmit}
            //     onClick={handleLogin(user)}
        >
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
            />
            {/*{entryType === 'signUp' ?*/}
                {/*(<Field*/}
                    {/*name="email"*/}
                    {/*type="email"*/}
                    {/*component={renderField}*/}
                    {/*label="Email"*/}
                {/*/>)*/}
            {/*: null}*/}

            <Field
                name="password"
                type="text"
                component={renderField}
                label="Password"
            />
            {/*{entryType === 'signUp' ?*/}
                {/*(<Field*/}
                    {/*name="passwordDuplicate"*/}
                    {/*type="text"*/}
                    {/*component={renderField}*/}
                    {/*label="Password"*/}
                {/*/>)*/}
            {/*: null}*/}

            <div>
                <button
                    // onClick={() => handleLogin()}
                    type="button"
                    onClick={(e)=>handleLogin(user)}
                    // type="submit"
                    // disabled = {pristine}
                    disabled = {activeButtonSend(formSyncErrors) ? pristine : 'disabled'}
                >
                    {entryType === 'login'? 'Log In' : 'Sign Up'}
                </button>
                <button
                    type="button"
                    disabled={pristine || submitting}
                    onClick={reset}>
                    Restore
                </button>
            </div>
        </form>
    )
};

const AuthForm = reduxForm({
    form: 'authValidation',
    validate,
})(authValidationForm);


export default AuthForm;

// export default class AuthForm extends Component {
//
//     handleSubmit(e, handleLogin) {
//         e.preventDefault();
//         handleLogin();
//     }


    // render() {
    //     const {
    //         handleLogin,
    //         entryType,
    //     } = this.props;
    //
    //     switch (entryType) {
    //         case 'login':
    //             return (
    //                 <div>
    //                     <h2>Log In</h2>
    //                     <form>
    //                         <label>
    //                             User Name:
    //                             <input type="text" name="name" />
    //                         </label>
    //                         <br/>
    //                         <label>
    //                             Password:
    //                             <input type="password" name="name" />
    //                         </label>
    //                         <br/>
    //                         <input
    //                             type="submit"
    //                             value="Log In"
    //                             onClick={e => this.handleSubmit(e, handleLogin)}
    //                         />
    //                     </form>
    //                 </div>
    //             );
    //
    //         case 'signUp':
    //             return (
    //                 <div>
    //                     <h2>Sign Up</h2>
    //                     <form>
    //                         <label>
    //                             User Name:
    //                             <input type="text" name="name" />
    //                         </label>
    //                         <br/>
    //                         <label>
    //                             User Email:
    //                             <input type="text" name="email" />
    //                         </label>
    //                         <br/>
    //                         <label>
    //                             Password:
    //                             <input type="password" name="password" />
    //                         </label>
    //                         <br/>
    //                         <input
    //                             type="submit"
    //                             value="Sign Up"
    //                             onClick={e => this.handleSubmit(e, handleLogin)}
    //                         />
    //                     </form>
    //                     <hr/>
    //
    //                 </div>
    //             );
    //
    //         default:
    //             return false;
    //     }
    // }
// }
