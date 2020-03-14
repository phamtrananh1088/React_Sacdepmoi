import React, { Component } from 'react';
import { MainForm } from '../shared/MainForm';
export class ProductRegister extends Component {
    static displayName = ProductRegister.name;

    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        alert('A name was submitted: ');
        event.preventDefault();
    }

    render() {
        let data = { controls: [] };
        data.controls.push({headerDisplayed:true,displayItemName:'haha',required:true,controlName:'productName',maxLength:50,inputValue:'Hemohim',});
        return (
            <form onSubmit={this.handleSubmit}>
                <MainForm model={data}/>
            </form>
        );
    }
}