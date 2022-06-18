import React from "react";
import { Component } from "react";

class Input extends Component {
    name = this.props.name
    value = this.props.value
    required = this.props.required
    type = this.props.type
    handleChange = (event) => this.props.onChange(event.target.value)
    render() {
        return (
            <div className="field">
                <label className="label">{this.name}</label>
                <div className="control">
                    <input 
                        className="input" 
                        type={this.type} 
                        name={this.name} 
                        required={this.required} 
                        defaultValue={this.value}
                        onChange={this.handleChange}
                    />
                </div>
            </div>
        );
    }
}
 
export default Input;