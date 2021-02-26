import React, { Component } from 'react';
import Layout from '../../components/Layout/Layout';
import products from '../../utils/products.json';
import ProductList from '../../components/ProductList/ProductList';
import BaseListSidebar from "../../components/BaseListSlidebar/BaseListSidebar"

class Category extends Component {
    constructor(props) {
        super(props);
        this.state = {
            category: {},
            items: [],
            minRange: 0,
            maxRange: 10000
        }
    }



    handleShowItems(range){
        if (range === "1-100"){
            this.setState({
                minRange: 1,
                maxRange: 1000,     
            })
           
        } else if (range === "100-200"){
            this.setState({
                minRange: 1000,
                maxRange: 2000
            })
        } else if (range === "200-300"){
            this.setState({
                minRange: 2000,
                maxRange: 10000
            })
        }else if (range === "nofilter"){
            this.setState({
                minRange: 1,
                maxRange: 100000
            })
        }

    }

    componentDidMount() {
        const { match } = this.props;
        const categoryName = match.params.categoryName;
        this.setState({
            category: products[categoryName],
            items: products[categoryName].items
        });
    }

    render() {
        return (
            <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-2">
                                <BaseListSidebar handleShowItems={(range) => this.handleShowItems(range)}/>
                            </div>
                        <div className="col-10 container-fluid container-min-max-width">
                            <h2>{ this.state.category.name }</h2>
                            <ProductList products={this.state.items} minRange={this.state.minRange} maxRange={this.state.maxRange}/>
                        </div>
                    </div>
                </div>
            </Layout>
        );
    }
}

export default Category;