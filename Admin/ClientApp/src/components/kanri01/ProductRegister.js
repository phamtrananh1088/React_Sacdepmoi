import React, { Component } from 'react';
import { MainForm } from '../shared/MainForm';
export class ProductRegister extends Component {
    static displayName = ProductRegister.name;

    constructor(props) {
        super(props);
        this.state = {value: '', loading: true };
        this.inputRef  = React.createRef();
        this.handleElChange = this.handleElChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.get_eav_attribute();
    }

    handleElChange(event) {
        this.setState({value: event.target.value});
    }

    handleSubmit(event) {
        alert('A name was submitted: ' + this.inputRef.value);        
        event.preventDefault();
    }

    render() {
        let contents = '';
        if(this.state.loading){
            contents = <p><em>Loading...</em></p>;
        }else{
            let data = { controls: [] };
            for (let im = 0; im < this.state.eav_attribute.length; im++) {
                const element = this.state.eav_attribute[im];
                data.controls.push({partType:'textbox', displayed:true,displayLine:im+1,displayLevel:1, headerDisplayed: true, displayItemName: element.attribute_code, displayItemNameWidth:130, required: true, controlName: element.attribute_code, displayWidth:470, boxWidth:440, maxLength: 100, inputValue: 'Hemohim', });
            }
            contents = <MainForm model={data} onElChange={this.handleElChange} />;
        }
        // data.controls.push({inputRef: (m) => this.inputRef = m,partType:'textbox', displayed:true,displayLine:1,displayLevel:1, headerDisplayed: true, displayItemName: 'Tên sản phẩm', displayItemNameWidth:130, required: true, controlName: 'productName', displayWidth:470, boxWidth:440, maxLength: 100, inputValue: 'Hemohim', });
        // data.controls.push({partType:'selectdate', displayed:true,displayLine:1,displayLevel:2, headerDisplayed: true, displayItemName: 'Hạn sử dụng', displayItemNameWidth:130, required: false, controlName: 'expiredDate', displayWidth:170, boxWidth:90, maxLength: 10, dateFrom: '2020/03/15', });
        // data.controls.push({partType:'textbox', displayed:true,displayLine:2,displayLevel:1, headerDisplayed: true, displayItemName: 'Tên sản phẩm', displayItemNameWidth:130, required: false, controlName: 'productName', displayWidth:770, boxWidth:440, maxLength: 100, inputValue: 'Hemohim', });
        // data.controls.push({partType:'dropdownlist', displayed:true,displayLine:3,displayLevel:2, headerDisplayed: true, displayItemName: 'Tên sản phẩm', displayItemNameWidth:130, required: true, controlName: 'productName', displayWidth:770, boxWidth:100, maxLength: 100,selectItems:[{paramNo:1,itemValue:'a'},{paramNo:2,itemValue:'b'},{paramNo:3,itemValue:'c'}], inputValue: {paramNo:1,itemValue:'a'}, });
        return (
            <form onSubmit={this.handleSubmit}>
                <div style={{marginBottom: 5}}>
                    <div className="body-heading" style={{paddingBottom: 2, paddingTop: 2, display: 'flex', justifyContent: 'space-between', maxWidth:901}} id="divHeader">
                        <div>
                            <div style={{fontWeight:'bold',wordBreak:'break-all'}}>Product Register</div>
                        </div> 
                    </div>
                </div>
                <div style={{marginBottom: 5}}>
                    <div>
                        <input className="button is-success btndefault margin-left-button" style={{width:'auto'}} type="submit" value="Register"/>                
                    </div>
                </div>
                <div>
                    {contents}
                </div>
            </form>
        );
    }

    async get_eav_attribute() {
        const response = await fetch('api/product_api.php/get_eav_attribute');
        const data = await response.json();
        this.setState({ eav_attribute: data, loading: false });
    }
}