import React, { Component } from 'react';

export class AuthForm extends Component {

    handleSubmit(e, handleLogin) {
        e.preventDefault();
        handleLogin();
    }
    render() {
        const {
            handleLogin,
            entryType,
        } = this.props;

        switch (entryType) {
            case 'login':
                return (
                    <div>
                        <h2>Log In</h2>
                        <form>
                            <label>
                                User Name:
                                <input type="text" name="name" />
                            </label>
                            <br/>
                            <label>
                                Password:
                                <input type="password" name="name" />
                            </label>
                            <br/>
                            <input
                                type="submit"
                                value="Log In"
                                onClick={e => this.handleSubmit(e, handleLogin)}
                            />
                        </form>
                    </div>
                );

            case 'signUp':
                return (
                    <div>
                        <h2>Sign Up</h2>
                        <form>
                            <label>
                                User Name:
                                <input type="text" name="name" />
                            </label>
                            <br/>
                            <label>
                                User Email:
                                <input type="text" name="email" />
                            </label>
                            <br/>
                            <label>
                                Password:
                                <input type="password" name="password" />
                            </label>
                            <br/>
                            <input
                                type="submit"
                                value="Sign Up"
                                onClick={e => this.handleSubmit(e, handleLogin)}
                            />
                        </form>
                    </div>
                );

            default:
                return false;
        }
    }
}
