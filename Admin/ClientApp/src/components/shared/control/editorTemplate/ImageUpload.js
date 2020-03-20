import React, { Component } from 'react';
export class ImageUpload extends Component {
    static displayName = ImageUpload.name;

    constructor(props) {
        super(props);
        this.refFile = React.createRef();
        this.refFileList = React.createRef();
        this.handleChange = this.handleChange.bind(this);
        this.handleImage = this.handleImage.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    handleChange(e) {
        this.props.onElChange(e);
    }

    handleClick(event){
       const fileElem = this.refFile.current;
       if(fileElem){
           fileElem.click();
       }
    }
    handleImage(event){
        const files = this.refFile.current.files;
        if(files.length > 0){
            const file = files[0];
            if (!file.type.startsWith('image/')){ return; }
            const fileList = this.refFileList.current;
            fileList.innerHTML = "";
            const list = document.createElement("ul");
            fileList.appendChild(list);
            const li = document.createElement("li");
            list.appendChild(li);
            const info = document.createElement("span");
            info.innerHTML = file.name + ": " + file.size/1024 + " kb";
            li.appendChild(info);
            const img = document.createElement("img");
            const reader = new FileReader();
            reader.onload = (function(aImg) { 
                return function(e) { 
                    var image = new Image();
                    image.onload = function (imageEvent){
        
                        // Resize the image
                        var canvas = document.createElement('canvas'),
                            max_size = 410,
                            width = image.width,
                            height = image.height;
                        var canvasWidth = canvas.width = 1360;//ratio Math.pi
                        var canvasHeight = canvas.height = 410;
                        // if (width > height) {
                        //     if (width > max_size) {
                        //         height *= max_size / width;
                        //         width = max_size;
                        //     }
                        // } else {
                            if (height > max_size) {
                                width *= max_size / height;
                                height = max_size;
                            }
                        // }
                        canvas.width = width;
                        canvas.height = height;
                        var context = canvas.getContext('2d');                        
                        context.fillStyle = 'rgba(218, 223, 227, 1)';
                        context.fillRect(0, 0, canvasWidth, canvasHeight);
                        // context.drawImage(image, 0, 0, width, height);
                        // context.drawImage(image, width, 0, width, height);
                        for (var i = 0; i < 4; i++) {
                            for (var j = 0; j < 3; j++) {
                                context.drawImage(image, j * 50, i * 38, 50, 38);
                            }
                        }
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
                    <input type="file" ref={this.refFile} id={this.props.model.controlName} accept="image/*" style={{display:'none'}} onChange={this.handleImage}/>
                    <button type="button" onClick={this.handleClick}>Select an image</button>
                    <div ref={this.refFileList}>
                        <p>No image</p>
                    </div>
                </div>
            </td>
        );
    }
}