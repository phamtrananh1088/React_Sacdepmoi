import React, { Component } from 'react';
export class ComCarousel extends Component {
    static displayName = ComCarousel.name;

    constructor(props) {
        super(props);
        this.state = {
            index: 0,
            tick: 5000
        };
    }

    componentDidMount() {
        this.timerID = setInterval(
            () => this.tick(),
            this.props.tick
        );
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        this.setState(function (state, props) {
            if (state.index >= props.data.length - 1) {
                state.index = -1;
            }
            return {
                index: state.index + 1
            };
        });
    }

    render() {
        return (
            <div className="MultiLinkPOVCarousel">
                <div>
                    <div className="slider" style={{ position: 'relative' }}>
                        <div className="slider-frame" style={{ maxWidth: '100%', width: 1360, backgroundColor: '#0171fb', overflow: 'hidden', textAlign: 'center' }}>
                            <img alt="sacdepmoi.com.vn. xinh đẹp, tự tin, khỏe khoắn" src={this.props.data[this.state.index]} />
                        </div>
                        <div className="slider-decorator-0" style={{ position: 'absolute', bottom: 12, left: '50%', height: 'auto',}}>
                            <div style={{ height: 30, padding: '0 16px', borderRadius: 17, alignItems: 'center', display: 'flex', textAlign: 'center', background: 'rgba(0, 0, 0, .8)',}}>
                                <div style={{ display: 'inline-block' }}>
                                    <ul style={{ lineHeight: 0, listStyle: 'none', alignItems: 'center', display: 'flex', padding: '0 8px', margin: '0' }}>
                                        <li style={{ lineHeight: 0, display: 'inline - block', margin: '0 2px', verticalAlign: 'top', }}><buton type='button' style={{ padding: '1 6px', color: '#fff', backgroundColor: 'rgba(0, 0, 0, 0)'}} className="elc-icon paginator-pause-play elc-icon-pause font-bold"></buton></li>
                                        <li style={{ lineHeight: 0, display: 'inline - block', margin: '0 2px', verticalAlign: 'top', }}><div style={{ padding: 6 }}><buton type='button' style={{ width: 5, height: 5, color: '#fff', backgroundColor: '#fff', padding: 0, margin: 0, borderRadius: '50%' }}></buton></div></li>
                                        <li style={{ lineHeight: 0, display: 'inline - block', margin: '0 2px', verticalAlign: 'top', }}><div style={{ padding: 6 }}><buton type='button' style={{ width: 5, height: 5, color: '#fff', backgroundColor: '#fff', padding: 0, margin: 0, borderRadius: '50%' }}></buton></div></li>
                                        <li style={{ lineHeight: 0, display: 'inline - block', margin: '0 2px', verticalAlign: 'top', }}><div style={{ padding: 6 }}><buton type='button' style={{ width: 5, height: 5, color: '#fff', backgroundColor: '#fff', padding: 0, margin: 0, borderRadius: '50%' }}></buton></div></li>
                                        <li style={{ lineHeight: 0, display: 'inline - block', margin: '0 2px', verticalAlign: 'top', }}><div style={{ padding: 6 }}><buton type='button' style={{ width: 5, height: 5, color: '#fff', backgroundColor: '#fff', padding: 0, margin: 0, borderRadius: '50%' }}></buton></div></li>
                                        <li style={{ lineHeight: 0, display: 'inline - block', margin: '0 2px', verticalAlign: 'top', }}><div style={{ padding: 6 }}><buton type='button' style={{ width: 5, height: 5, color: '#fff', backgroundColor: '#fff', padding: 0, margin: 0, borderRadius: '50%' }}></buton></div></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}