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
        } = this.props;

        return (
            <div className="App">
                <Header
                    userName = {userName}
                    isAuth = {isAuth}
                    handleLogout = {handleLogout}
                    handleTypePageEntry = {handleTypePageEntry}
                />
                <AuthForm
                    handleLogin = {handleLogin}
                    entryType = {entryType}
                />
            </div>
        );
    }
}

const mapStateToProps = store => {
    console.log(store);

    return {
        userName: store.loginForm.userName,
        isAuth: store.loginForm.isAuth,
        entryType: store.loginForm.entryType
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
