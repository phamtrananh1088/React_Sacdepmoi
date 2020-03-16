import React, { Component } from 'react';
export class Label extends Component {
    static displayName = Label.name;

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onElChange(e);
    }

    render() {
        return (
            <td style={{width:this.props.model.displayWidth}}>
                <div style={{display:'flex',alignItems:'center', justifyContent:'flex-start'}}>
                    <label id={this.props.model.controlName} style={{display:'block', width:this.props.model.BoxWidth, textAlign: 'left'}}
                    onChange={this.handleChange}>
                        <span>
                            {this.props.model.displayValue}
                        </span>
                    </label>
                </div>
            </td>
        );
    }
}