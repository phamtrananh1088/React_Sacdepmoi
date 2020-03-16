import React, { Component } from 'react';
import { Header } from './control/editorTemplate/Header';
import { TextBox } from './control/editorTemplate/TextBox';
import { DropDownList } from './control/editorTemplate/DropDownList';
import { SelectDate } from './control/editorTemplate/SelectDate';
export class MainForm extends Component {
    static displayName = MainForm.name;

    constructor(props) {
        super(props);
        this.handleElChange = this.handleElChange.bind(this);
    }

    handleElChange(event) {
        this.props.onElChange(event);
    }
    render() {
        const partType = {         
            SELECTDATE:"selectdate",
            TEXTBOX:"textbox",
            TEXTAREA:"textarea",         
            DROPDOWNLIST:"dropdownlist",          
            RADIOBUTTON:"radiobutton",       
            CHECKBOX:"checkbox",
            AUTOCALCULATE:"autocalculate",
            HEADELINE:"headline",
            LABEL:"label",
            FILEUPLOAD:"fileupload",
        }
        let listL = [];
        let list = this.props.model.controls.filter((c)=> c.displayed==true)
        .sort((a,b)=>a.displayLine-b.displayLine).sort((a,b)=>a.displayLevel-b.displayLevel);
        let m =[];
            for (let id = 0; id < list.length; id++) {
                const item = list[id];
                if(listL.some((c)=>c==item.displayLine))
                {
                  continue;
                }
                else
                {
                  m.push(list.filter((m)=>m.displayLine==item.displayLine));
                  listL.push(item.displayLine);
                }
            } 
        let n =m.map((item,index)=>{
            let p =[];
            for (let id = 0; id < item.length; id++) {
                const element = item[id];
                p.push(<Header model={element} />);
                switch (element.partType) {
                    case partType.TEXTBOX:
                        p.push(<TextBox model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.DROPDOWNLIST:
                        p.push(<DropDownList model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.SELECTDATE:
                        p.push(<SelectDate model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.TEXTAREA:
                        p.push(<TextBox model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.RADIOBUTTON:
                        p.push(<TextBox model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.CHECKBOX:
                        p.push(<TextBox model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.AUTOCALCULATE:
                        p.push(<TextBox model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.HEADELINE:
                        p.push(<TextBox model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.LABEL:
                        p.push(<TextBox model={element} onElChange={this.handleElChange} />);
                        break;
                    case partType.FILEUPLOAD:
                        p.push(<TextBox model={element} onElChange={this.handleElChange} />);
                        break;
                    default:
                        break;
                }  
            } 
            return <table className="wfipt" style={{border:'none'}}>
                <tr>
                    {p}
                </tr>
            </table>;
        });
        return (
            <div style={{display:'table'}} id="divMainForm">
                {n}
            </div>
        );
    }
}