import React, { Component } from 'react';
export class DropDownList extends Component {
    static displayName = DropDownList.name;

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.props.onElChange(e);
    }

    render() {
        let a = this.props.model.selectItems.map((item,index)=>{
            if (this.props.model.inputValue != null && item.paramNo == this.props.model.inputValue.paramNo)
            {
              return  <option value={item.paramNo} selected="selected">{item.itemValue}</option>;
            }
            else
            {
              return  <option value={item.paramNo}>{item.itemValue}</option>;
            }
        });
        return (
            <td style={{width:this.props.model.displayWidth, textAlign:'left'}}>
                <div style={{display:'flex',alignItems:'center', justifyContent:'flex-start'}}>
                    <select name={this.props.model.controlName} className="select select-border" id={this.props.model.controlName}
                            style={{width:this.props.model.boxWidth == 0 ? 150 :this.props.model.BoxWidth}}
                            onChange={this.handleChange}>
                        {a}
                        }
                    </select>
                </div>
            </td>
        );
    }
}