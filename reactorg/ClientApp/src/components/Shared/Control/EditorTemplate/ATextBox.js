import React, { Component } from 'react';
export class ATextBox extends Component {
    static displayName = ATextBox.name;

    constructor(props) {
        super(props);
    }

    render() {
        let contents = '';
        let header = '';
        let req = '';
        let body = '';
        if (this.props.model.required) {
            req = <font color="red" size="2">*</font>;
        }
        if (this.props.model.headerDisplayed) {
            header = <th style={{ width: 100, wordBreak: 'break-all' }}>
                <span class="wfLiteral">
                    {req}
                    {this.props.model.displayItemName}
                </span>
            </th >;
        }
        body =
            <td style={{ width: 100, textAlign: 'left', wordBreak: 'break-all', }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <input name="{this.props.model.controlName}" class="input" id="{this.props.model.controlName}" maxlength="{this.props.model.maxlength)"
                        style={{ width: 100 }} type="text" value="{this.props.model.inputValue}" placeholder="{this.props.model.inputExample}" />
                </div>
            </td>
        contents = header + body;
        return (
            { contents }
        );
    }
}