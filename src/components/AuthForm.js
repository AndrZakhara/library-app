import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = values => {
    const errors = {};
    if (!values.username) {
        errors.username = 'Required';
    } else if (values.username.length > 15 || values.username.length < 3) {
        errors.username = 'Must be between 3 and 8 characters';
    }
    if (!values.email) {
        errors.email = 'Required';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
    }
    if (!values.password) {
        errors.password = 'Required'
    } else if (values.password.length > 8 || values.password.length < 3) {
        errors.password = 'Must be between 3 and 8 characters'
    }
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

const syncValidationForm = props => {
    const { handleSubmit, pristine, reset, submitting } = props;
    return (
        <form onSubmit={handleSubmit}>
            <Field
                name="username"
                type="text"
                component={renderField}
                label="Username"
            />
            <Field name="email" type="email" component={renderField} label="Email" />
            <Field name="password" type="text" component={renderField} label="Password" />
            <div>
                <button type="submit" disabled>
                    Submit
                </button>
                <button type="button" disabled={pristine || submitting} onClick={reset}>
                    Clear Values
                </button>
            </div>
        </form>
    )
};

const AuthForm = reduxForm({
    form: 'syncValidation',
    validate,
})(syncValidationForm);

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
