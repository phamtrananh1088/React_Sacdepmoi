import React, { Component } from 'react';
export class ComCarousel extends Component {
    static displayName = ComCarousel.name;

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            data: ['https://lh3.google.com/u/0/d/126vHRcvh0T_0m5NasGpR1Vabq2B4FkIO=w200-h190-p-k-nu-iv1',
                'https://lh3.google.com/u/0/d/129wTvcnxDNv89qz3jAM8KbvZzpZf-e6z=w200-h190-p-k-nu-iv1',
                'https://lh3.google.com/u/0/d/12JGFGJX6VrjtpfxVM6OKW3L_h6nnlXi1=w200-h190-p-k-nu-iv1'
            ] };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            5000
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(function (state, props) {
            if (this.state.index >= this.state.data.length - 1) {
                this.state.index = -1;
            }
            return {
                index: this.state.index + 1
            };
        });
    }

    render() {
        return (
            <div className="MultiLinkPOVCarousel">
                <div>
                    <div className="slider">
                        <div className="slider-frame">
                            <img src={this.state.data[this.state.index]} />
                        </div>
                        <div className="slider-decorator-0" style={{ position: 'absolute', bottom:12, left:'50%', height: 'auto' }}>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}