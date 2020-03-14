import React, { Component } from 'react';
export class TextBox extends Component {
    static displayName = TextBox.name;

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onElChange(e);
    }

    render() {
        let contents = '';
        let header = '';
        let req = '';
        let body = '';
        if (this.props.model.required) {
            req = <font style={{ color:'red', fontSize:'2em' }}>*</font>;
        }
        if (this.props.model.headerDisplayed) {
            header = <th style={{ width: 100, wordBreak: 'break-all' }}>
                <span className="wfLiteral">
                    {req}
                    {this.props.model.displayItemName}
                </span>
            </th >;
        }
        body =
            <td style={{ width: 100, textAlign: 'left', wordBreak: 'break-all', }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <input name="{this.props.model.controlName}" className="input" id="{this.props.model.controlName}" maxLength="{this.props.model.maxLength)"
                    style={{ width: 100 }} type="text" value="{this.props.model.inputValue}" placeholder="{this.props.model.inputExample}"
                    onChange={this.handleChange} />
                </div>
            </td>
        contents = header + body;
        return (
            { contents }
        );
    }
}