import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Header } from './Header';
import  AuthForm  from '../components/AuthForm';
import { handleLogin, handleLogout, handleTypePageEntry } from '../actions/userFormActions';

class App extends Component {

    render() {
        console.log(this.props);
        const {
            userName,
            isAuth,
            entryType,
            handleLogin,
            handleLogout,
            handleTypePageEntry,
            formSyncErrors
        } = this.props;

        return (
            <div className="App">
                <Header
                    userName = {userName}
                    isAuth = {isAuth}
                    handleLogout = {handleLogout}
                    handleTypePageEntry = {handleTypePageEntry}
                />
                { entryType ? (
                        <AuthForm
                            handleLogin = {handleLogin}
                            entryType = {entryType}
                            formSyncErrors = {formSyncErrors}
                        />
                    ) : null }
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store.form);

    return {
        userName: store.loginForm.userName,
        isAuth: store.loginForm.isAuth,
        entryType: store.loginForm.entryType,
        formSyncErrors: store.form
    }
};

const mapDispatchToProps = dispatch => {
    return {
        handleLogin: () => dispatch(handleLogin()),
        handleLogout: () => dispatch(handleLogout()),
        handleTypePageEntry: (value) => dispatch(handleTypePageEntry(value))
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);
