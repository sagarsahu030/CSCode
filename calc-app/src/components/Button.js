import React, { Component } from 'react'
import './Button.css';

class Button extends Component {
    isOperator=val=>{
        // it will check if it is a number or not 
        // if it is not a number it will return true due to this '!' 
        // then create val on decimal or space or equal sign
        return !isNaN(val) || val==="." || val==="="
    }
    render() {
        return (
            <div className=
            // what we are doing here is
            // using backtick
            // check if this is nut a number or it is a space or it is a . then we wont do anything
            // else we add a class component called operator 
            {
                `button ${this.isOperator(this.props.children)?"":"operator"}`
        
            }
            >
                {this.props.children}
            </div>
        )
    }
}

export default Button;
