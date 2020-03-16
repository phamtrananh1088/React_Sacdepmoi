import React, { Component } from 'react';
export class TextArea extends Component {
    static displayName = TextArea.name;

    constructor(props) {
        super(props);
        this.state = {value: this.props.model.inputValue};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({value: event.target.value});
        this.props.onElChange(event);
    }

    render() {
        let charlimit = '* (Tối đa '+this.props.model.maxLength+' ký tự)';
        return (
            <td style={{width:this.props.model.displayWidth, textAlign:'left'}}>
                <div style={{display:'flex',alignItems:'center', justifyContent:'flex-start'}}>
                <textarea name={this.props.model.controlName} className="textarea" id={this.props.model.controlName} maxLength={this.props.model.maxLength} placeholder={charlimit}
                  value={this.state.value} style = {{width:this.props.model.Width,height:this.props.model.Height}}/>
                </div>
            </td>
        );
    }
}