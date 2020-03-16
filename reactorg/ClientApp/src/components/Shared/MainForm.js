import React, { Component } from 'react';
import { Header } from './control/editorTemplate/Header';
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
                p.push(<TextBox model={element} onElChange={this.handleElChange} />);
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