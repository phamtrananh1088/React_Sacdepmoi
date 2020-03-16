import React, { Component } from 'react';
export class RadioButton extends Component {
    static displayName = RadioButton.name;

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onElChange(e);
    }

    render() {
        let RepeatColumns = this.props.model.numberColumns > 0 ? this.props.model.numberColumns : 5;
        let iNumRow = this.props.model.selectItems.length / RepeatColumns + 1;
        let a = []
        for (let i = 0; i < iNumRow; i++)
            {
                let b = [];
                for (let j = 0; j < RepeatColumns; j++)
                    {
                        index = i * RepeatColumns + j;
                        if (index < numberItems)
                        {
                            let check = this.props.model.inputValue != null && this.props.model.inputValue.Any(cus => cus.ParamNo == this.props.model.selectItems[index].ParamNo) ?true :false;
                            b.push(
                                <td>
                                    <input id={this.props.model.controlName +'_'+ index} type="radio" checked={check} name={this.props.model.controlName} value={this.props.model.selectItems[index].paramNo}
                                    onChange={this.handleChange}/>
                                    <label>{this.props.model.selectItems[index].itemValue}</label>
                            </td>
                            );
                        }
                        else
                        {
                            b.push(<td></td>);
                        }
                    }
                a.push(
                <tr>
                    {b}
                </tr>);
            }
        return (
            <td style={{width:this.props.model.displayWidth, textAlign:'left'}}>
                <div style={{display:'flex',alignItems: 'center', justifyContent:'flex-start'}}>
                    <table class="nobd" id={"tbl_"+this.props.model.controlName} style={{border:'none',display:'flex', width:'auto'}}>
                        <tbody>
                            {a}
                        </tbody>
                    </table>
                </div>
            </td>
        );
    }
}