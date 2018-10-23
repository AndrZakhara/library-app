import React, { Component } from 'react';

export class Form extends Component {

    handleSubmit(e) {
        e.preventDefault();
        console.log('click');
        this.props.handleLogin();
    }
    render() {
        return(            
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
                    onClick={e => this.handleSubmit(e)}
                />
            </form>
        )
    }
}
