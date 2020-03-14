import React, { Component } from 'react';
import { TextBox } from './control/editorTemplate/TextBox';
export class MainForm extends Component {
    static displayName = MainForm.name;

    constructor(props) {
        super(props);
        this.handleElChange = this.handleElChange.bind(this);
    }

    handleElChange(e) {
        alert(e.target.value);
    }
    render() {
        let contents = '';
        let indents = this.props.model.controls.map((item, index) => (
            <TextBox model={item} onElChange={this.handleElChange} />
        ));
        contents = <table className="wfipt" style={{ border:'none', width: '100%' }} >
            <tr>
                {indents}
            </tr>
        </table >;
        return (
            { contents }
        );
    }
}