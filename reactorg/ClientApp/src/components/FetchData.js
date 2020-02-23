import React, { Component } from 'react';

export class FetchData extends Component {
    static displayName = FetchData.name;

    constructor(props) {
        super(props);
        this.state = { forecasts: [], loading: true };
    }

    componentDidMount() {
        this.populateProductData();
    }

    static renderProductTable(products) {
        return (
            <table className='table table-striped' aria-labelledby="tabelLabel">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Description</th>
                        <th>Price</th>
                        <th>Image</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map(p =>
                        <tr key={p.id}>
                            <td>{p.id}</td>
                            <td>{p.name}</td>
                            <td>{p.description}</td>
                            <td>{p.price}</td>
                            <td><img src={p.thumbnail}/></td>
                        </tr>
                    )}
                </tbody>
            </table>
        );
    }

    render() {
        let contents = this.state.loading
            ? <p><em>Loading...</em></p>
            : FetchData.renderProductTable(this.state.products);
        let imgs = [];
        //this.state.products.map(p => {
        //    imgs.push(<img src={p.price} />);
        //});
        return (
            <div>
                <h1 id="tabelLabel" >Product</h1>
                <p>This component demonstrates fetching data from the server.</p>
                {contents}
                <p>All products image.</p>
                {imgs}
            </div>
        );
    }

    async populateProductData() {
        const response = await fetch('api/product_api.php/get_all_products');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }
}
