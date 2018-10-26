import React, { Component } from 'react';
import { RegistryUser } from '../components/RegistryUser';
import { UnregistryUser } from '../components/UnregistryUser';

export class Header extends Component {
  headerInfo(isAuth, userName, handleLogout, handleTypePageEntry) {
    if (isAuth) {
      return (
        <RegistryUser
          userName={userName}
          handleLogout={handleLogout}
        />
      );
    }
    return (
      <UnregistryUser
        handleTypePageEntry={handleTypePageEntry}
      />
    );
  }

  render() {
    const {
      userName,
      isAuth,
      handleLogout,
      handleTypePageEntry,
    } = this.props;

    const pageAuthOrUserInfo = this.headerInfo(isAuth, userName, handleLogout, handleTypePageEntry);

    return (
      <div>
        <h2>Social App heder</h2>
        {pageAuthOrUserInfo}
        <br />
        <hr />
      </div>
    );
  }
}
