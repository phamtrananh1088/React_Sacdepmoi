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
        let charlimit = '* (Tối đa '+this.props.model.maxLength+' ký tự)';
        return (
            <td style={{ width: this.props.model.displayWidth, textAlign: 'left', wordBreak: 'break-all', }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <input name={this.props.model.controlName} className="input" id={this.props.model.controlName} maxLength={this.props.model.maxLength}
                        style={{ width: this.props.model.boxWidth }} type="text" value={this.props.model.inputValue} placeholder={charlimit}
                        onChange={this.handleChange} />
                </div>
            </td>
        );
    }
}