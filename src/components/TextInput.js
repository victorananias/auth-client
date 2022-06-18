import React from "react";
import { Component } from "react";
import Input from "./Input";

class TextInput extends Component {
    value = this.props.value 
    type = this.props.type 
    required = this.props.required 
    name = this.props.name
    handleChange = this.props.onChange
    render() { 
        return (
            <Input
                value={this.value}
                type={this.type}
                required={this.required}
                name={this.name}
                onChange={this.handleChange}
             />
        );
    }
}
 
export default TextInput;