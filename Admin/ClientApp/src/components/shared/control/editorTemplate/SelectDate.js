import React, { Component } from 'react';
export class SelectDate extends Component {
    static displayName = SelectDate.name;

    constructor(props) {
        super(props);
        this.state = {dateFrom: this.props.model.dateFrom, dateTo: this.props.model.dateTo};
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(event) {
        this.setState({dateFrom: event.target.value});
        this.props.onElChange(event);
    }

    render() {
        let type = 0;
        let length = 10;
        switch (this.props.model.dateFormat)
        {
            case "YEAR":
                type = 2;
                length = 4;
                break;
            case "YM":
                type = 1;
                length = 7;
                break;
            default:
                break;
        }
        let a = [];
        if (this.props.model.rangeSelectable)
        {
            a.push(<label>&nbsp;～&nbsp;</label>);
            a.push(<input name={this.props.model.controlName+"_To"} className="input datepicker" id={this.props.model.controlName+"_To"} style={{width:100}}
                                        maxLength={length} type="text" value={this.state.dateTo} placeholder={this.props.model.InputExample}
                                        onChange={this.handleChange}/>);
            a.push(<a id={"DateIcon_"+this.props.model.controlName+"_To"} className="elc-icon elc-icon-date" style={{fontSize:24}}>
                <i class="fa fa-calendar is-medium font-size-calendar"></i>
            </a>);
        }
        return (
            <td style={{width:this.props.model.displayWidth}}>
                <div style={{display:'flex', alignItems: 'center', justifyContent:'flex-start'}}>
                    <input name={this.props.model.controlName + this.props.model.rangeSelectable ? "_From" : ""} className="input datepicker"
                        id={this.props.model.controlName + this.props.model.rangeSelectable ? "_From" : ""} style={{width:100}} maxLength={length} type="text" value={this.state.dateFrom} placeholder={this.props.model.inputExample}
                        onChange={this.handleChange}/>
                    <a id={"DateIcon_"+this.props.model.controlName + (this.props.model.rangeSelectable ? "_From" : "")} className="elc-icon elc-icon-date" style={{fontSize:24}}>
                        <i className="fa fa-calendar is-medium font-size-calendar"></i>
                    </a>
                    {a}
                </div>
            </td>
        );
    }
}