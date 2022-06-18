import React from "react";
import { Component } from "react";
import Input from "./Input";

class PasswordInput extends Component {
    value = this.props.value
    required = this.props.required
    name = this.props.name
    handleChange = this.props.onChange
    render() { 
        return (
            <Input 
                type="password"
                value={this.value}
                required={this.required}
                name={this.name}
                onChange={this.handleChange}
            />
        );
    }
}
 
export default PasswordInput;