import React, { Component } from 'react';
import { Container } from 'reactstrap';
import { ComInfo } from './ComInfo';
export class ComFooter extends Component {
    static displayName = ComFooter.name;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <footer>
                <Container>
                    <ComInfo/>
                </Container>
            </footer>
        );
    }
}