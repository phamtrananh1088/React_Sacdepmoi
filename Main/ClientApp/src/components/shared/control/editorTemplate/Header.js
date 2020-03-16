import React, { Component } from 'react';
export class Header extends Component {
    static displayName = Header.name;

    constructor(props) {
        super(props);
    }

    render() {
        let req = '';
        if (this.props.model.required) {
            req = <font style={{ color: 'red', fontSize: 13 }}>*&nbsp;</font>;
        }
        return (
            <th style={{ width: this.props.model.displayItemNameWidth, wordBreak: 'break-all' }}>
                <span className="wfLiteral">
                    {req}
                    {this.props.model.displayItemName}
                </span>
            </th >
        );
    }
}