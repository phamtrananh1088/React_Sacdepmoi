import React, { Component } from 'react';
export class ComInfo extends Component {
    static displayName = ComInfo.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>Posted by: Lan Anh</p>
                <p>Contact information: <a href="mailto:tatsukuma1401@gmail.com">
                    tatsukuma1401@gmail.com</a>.</p>
            </div>
        );
    }
}