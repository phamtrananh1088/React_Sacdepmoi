import React, { Component } from 'react';
export class ImageUpload extends Component {
    static displayName = ImageUpload.name;

    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.props.onElChange(e);
    }

    handleClick(event){
       const fileElem = document.getElementById(this.props.model.controlName);
       if(fileElem){
           fileElem.click();
       }
    }
    handleImage(event){
        let files = event.target.files;
        if(files.length > 0){
            const file =     files[0];
            if (!file.type.startsWith('image/')){ return; }
            const fileList = document.getElementById(this.props.model.controlName + '_fileList');
            fileList.innerHTML = "";
            const list = document.createElement("ul");
            fileList.appendChild(list);
            const li = document.createElement("li");
            list.appendChild(li);
            const info = document.createElement("span");
            info.innerHTML = file.name + ": " + file.size + " bytes";
            li.appendChild(info);
            const img = document.createElement("img");
            const reader = new FileReader();
            reader.onload = (function(aImg) { 
                return function(e) { 
                    var image = new Image();
                    image.onload = function (imageEvent) {
        
                        // Resize the image
                        var canvas = document.createElement('canvas'),
                            max_size = 1200,
                            width = image.width,
                            height = image.height;
                        if (width > height) {
                            if (width > max_size) {
                                height *= max_size / width;
                                width = max_size;
                            }
                        } else {
                            if (height > max_size) {
                                width *= max_size / height;
                                height = max_size;
                            }
                        }
                        canvas.width = width;
                        canvas.height = height;
                        canvas.getContext('2d').drawImage(image, 0, 0, width, height);
                        aImg.src = canvas.toDataURL('image/jpeg');
                    }
                    image.src = e.target.result; 
                }; 
            })(img);
            reader.readAsDataURL(file);
            li.appendChild(img);
        }
    }
    render() {
        return (
            <td style={{width:this.props.model.displayWidth}}>
                <div style={{display:'flex',alignItems:'center', justifyContent:'flex-start'}}>
                    <label id={this.props.model.controlName} style={{display:'block', width:this.props.model.BoxWidth, textAlign: 'left'}}
                    onChange={this.handleChange}>
                        <span>
                            {this.props.model.displayValue}
                        </span>
                    </label>
                    <input type="file" id={this.props.model.controlName} accept="image/*" style={{display:'none'}} onchange={this.handleImage}/>
                    <button type="button" id={this.props.model.controlName + '_btn'} onClick={this.handleClick}>Select an image</button>
                    <div id={this.props.model.controlName + '_fileList'}>
                        <p>No image</p>
                    </div>
                </div>
            </td>
        );
    }
}