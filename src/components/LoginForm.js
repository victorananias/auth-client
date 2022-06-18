import React from "react";
import { Component } from "react";
import PasswordInput from "./PasswordInput"
import TextInput from "./TextInput";

class LoginForm extends Component {
    state = { username: '', password: '' } 
    handleUsernameChange = (username) => this.setState({username})
    handlePasswordChange = (password) => this.setState({password})
    handleSubmit = (event) => {
        event.preventDefault()
        console.log(this.state)
    }
    render() { 
        return (
            <form onSubmit={this.handleSubmit}>
                <TextInput name="Username" required={true} value={this.state.username} onChange={this.handleUsernameChange}/>
                <PasswordInput name="Password" required={true} value={this.state.password} onChange={this.handlePasswordChange}/>
                <button type="submit">submit</button>
            </form>
        );
    }
}
 
export default LoginForm;