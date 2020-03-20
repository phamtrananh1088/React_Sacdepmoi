import React, { Component } from 'react';
export class TextBox extends Component {
    static displayName = TextBox.name;

    constructor(props) {
        super(props);
        this.state = {value: this.props.model.inputValue};
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
      
    }
    handleChange(event) {
        this.setState({value: event.target.value});
        if(this.props.onElChange){
            this.props.onElChange(event);
        }
    }

    render() {
        let charlimit = '* (Tối đa '+this.props.model.maxLength+' ký tự)';
        return (
            <td style={{ width: this.props.model.displayWidth, textAlign: 'left', wordBreak: 'break-all', }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-start' }}>
                    <input ref={this.props.model.inputRef} name={this.props.model.controlName} className="input" id={this.props.model.controlName} maxLength={this.props.model.maxLength}
                        style={{ width: this.props.model.boxWidth }} type="text" value={this.state.value} placeholder={charlimit}
                        onChange={this.handleChange}/>
                </div>
            </td>
        );
    }
}