import React, { Component } from 'react';

export class RegistryUser extends Component {

    render() {
        console.log(this.props);


        return(
            <div>
                <h4>Hi, {this.props.userName}!</h4>
                <button
                    onClick={e => this.props.handleLogout(e)}
                >Log Out</button>
            </div>
        )
    }
}
