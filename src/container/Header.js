import React, { Component } from 'react';
import { RegistryUser } from '../components/RegistryUser';
import { UnregistryUser } from '../components/UnregistryUser';

export class Header extends Component {

    hederInfo (isAuth, userName, handleLogout) {
        if(isAuth) {
            return <RegistryUser
                userName = {userName}
                handleLogout = {handleLogout}

            />;
        } else {
            return <UnregistryUser />;
        }
    }

    render() {
        console.log(this.props);
        const {
            userName,
            isAuth,
            handleLogout
        } = this.props;
        console.log(this.props.isAuth);

        const pageAuthOrUserInfo = this.hederInfo(isAuth, userName, handleLogout);

        return (
            <div>
                <h2>Social App heder</h2>
                {pageAuthOrUserInfo}
                <br/>
                <hr/>
            </div>
        )
    }          
}