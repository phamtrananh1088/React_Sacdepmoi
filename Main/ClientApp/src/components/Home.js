import React, { Component } from 'react';
import { ComCarousel } from './ComCarousel';
export class Home extends Component {
    static displayName = Home.name;

    constructor(props) {
        super(props);
        this.state = { products: [], loading: true };
    }

    componentDidMount() {
        this.populateProductData();
    }

    render() {
        let carosel_contents = '';
        if (this.state.loading) {
            carosel_contents = <p><em>Loading...</em></p>;
        } else {
            let data = [];
            this.state.products.map(p => {
                data.push(p.image + '=w410-h410-p-k-nu-iv1');
            });
            const tick = 5000;
            carosel_contents = <ComCarousel data={data} tick={tick} />;
        }
        return (
          <div>
            {carosel_contents}   
          </div>
        );
    }

    async populateProductData() {
        const response = await fetch('api/product_api.php/get_all_products');
        const data = await response.json();
        this.setState({ products: data, loading: false });
    }
}
