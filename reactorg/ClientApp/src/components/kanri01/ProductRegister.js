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
        data.controls.push({ displayed:true,displayLine:1,displayLevel:1, headerDisplayed: true, displayItemName: 'Tên sản phẩm', displayItemNameWidth:130, required: true, controlName: 'productName', displayWidth:470, boxWidth:440, maxLength: 100, inputValue: 'Hemohim', });
        data.controls.push({ displayed:true,displayLine:1,displayLevel:2, headerDisplayed: true, displayItemName: 'Hạn sử dụng', displayItemNameWidth:130, required: false, controlName: 'expiredDate', displayWidth:170, boxWidth:90, maxLength: 10, inputValue: '', });
        data.controls.push({ displayed:true,displayLine:2,displayLevel:1, headerDisplayed: true, displayItemName: 'Tên sản phẩm', displayItemNameWidth:130, required: false, controlName: 'productName', displayWidth:770, boxWidth:440, maxLength: 100, inputValue: 'Hemohim', });
        data.controls.push({ displayed:true,displayLine:3,displayLevel:2, headerDisplayed: true, displayItemName: 'Tên sản phẩm', displayItemNameWidth:130, required: true, controlName: 'productName', displayWidth:770, boxWidth:100, maxLength: 100, inputValue: 'Hemohim', });
        return (
            <form onSubmit={this.handleSubmit}>
                <MainForm model={data} />
            </form>
        );
    }
}