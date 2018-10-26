import React from 'react';
import { Field, reduxForm } from 'redux-form';

const validate = (values, registeredFields) => {
  const errors = {};

  if (!values.username) {
    errors.username = 'Required';
  } else if (values.username.length > 8 || values.username.length < 3) {
    errors.username = 'Must be between 3 and 8 characters';
  }

  if (!values.password) {
    errors.password = 'Required';
  } else if (values.password.length > 8 || values.password.length < 3) {
    errors.password = 'Must be between 3 and 8 characters';
  }

  return errors;
};

const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning },
}) => (
  <div>
    <label>{label}</label>
    <div>
      <input {...input} placeholder={label} type={type} />
      {touched
            && ((error && <span>{error}</span>)
                || (warning && <span>{warning}</span>))}
    </div>
  </div>
);

const authValidationForm = (props) => {
  const {
    pristine,
    reset,
    submitting,
    entryType,
    handleLogin,
    formSyncErrors,
  } = props;

  const activeButtonSend = (formSyncErrors) => {
    if (formSyncErrors.hasOwnProperty('authValidation')) {
      console.log('authValidation');
      return !formSyncErrors.authValidation.hasOwnProperty('syncErrors');
    }
  };

  const buttonValue = entryType === 'login' ? 'Log In' : 'Sign Up';

  return (
    <form onSubmit={handleLogin}>
      <Field
        name="username"
        type="text"
        component={renderField}
        label="Username"
      />

      <Field
        name="password"
        type="text"
        component={renderField}
        label="Password"
      />

      <div>
        <button
          type="submit"
          disabled={activeButtonSend(formSyncErrors) ? pristine : 'disabled'}
        >
          {buttonValue}
        </button>
        <button
          type="button"
          disabled={pristine || submitting}
          onClick={reset}
        >
                    Restore
        </button>
      </div>
    </form>
  );
};

const AuthForm = reduxForm({
  form: 'authValidation',
  validate,
})(authValidationForm);

export default AuthForm;
