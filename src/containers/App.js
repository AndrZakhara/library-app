import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from 'react-router-dom';
import { Header } from './Header';
import AuthForm from '../components/AuthForm';
import { handleLogin, handleLogout, handleTypePageEntry } from '../actions/userFormActions';

class App extends Component {
  render() {
    // console.log(this.props);
    const {
      userName,
      isAuth,
      entryType,
      handleLogin,
      handleLogout,
      handleTypePageEntry,
      formSyncErrors,
    } = this.props;

    const LoginForm = (
      <AuthForm
        handleLogin={handleLogin}
        entryType={entryType}
        formSyncErrors={formSyncErrors}
      />
    );

    return (
      <div className="App">
        <Header
          userName={userName}
          isAuth={isAuth}
          handleLogout={handleLogout}
          handleTypePageEntry={handleTypePageEntry}
        />
        <div>
          <ul>

            <li>
              <Link to="/loginPage">Log in</Link>
            </li>
            <li>
              <Link to="/RegisterPage">Sign Up</Link>
            </li>
          </ul>

          <hr />

          {/* <Route exact path="/" component={MainPage} /> */}
          <Route path="/loginPage" component={LoginForm} />
          <Route path="/RegisterPage" component={LoginForm} />
        </div>
        { entryType ? (
          <AuthForm
            handleLogin={handleLogin}
            entryType={entryType}
            formSyncErrors={formSyncErrors}
          />
        ) : null }
      </div>
    );
  }
}

const mapStateToProps = store => ({
  userName: store.loginForm.userName,
  isAuth: store.loginForm.isAuth,
  entryType: store.loginForm.entryType,
  formSyncErrors: store.form,
});
const mapDispatchToProps = dispatch => ({
  handleLogin: user => dispatch(handleLogin(user)),
  handleLogout: () => dispatch(handleLogout()),
  handleTypePageEntry: value => dispatch(handleTypePageEntry(value)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
