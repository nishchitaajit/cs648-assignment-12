import React from 'react'
import Filters from "./Filters";
import ProductTable from "./ProductTable";
import ProductForm from "./ProductForm";

class Product extends React.Component {
    constructor() {
        super();
        this.state = {
            productList : [
                {id : 0, name : "Bean Bag", price : "100"},
                {id : 1, name : "Chasie Lounge", price : "799"},
                {id : 2, name : "Clarinet", price : "459.99"},
                {id : 3, name : "Dining Table", price : "1300"},
                {id : 4, name : "Fortepiano", price : "11000"},
                {id : 5, name : "Harpsicord", price : "5000"},
            ], filterText : ''
        };

        this.handleDestroy = this.handleDestroy.bind (this);
        this.handleFilter = this.handleFilter.bind (this)
        this.handleSave = this.handleSave.bind (this);

    }

    handleSave (productSingle) {
        if (!productSingle.id) {
            productSingle.id = new Date().getTime()
        }
        this.setState ((prevState) => {
            let products = prevState.productList
            products[productSingle.id] = productSingle
            return { products }
        });
    }

    handleFilter (filterInput) {
        this.setState (filterInput)
    }

    handleDestroy (productId) {
        this.setState ((prevState) => {
            let products = prevState.productList
            delete products[productId]
            return { products }
        })
    }

    render () {
        return (
            <div class="container-fluid">
                <h2 class="col-md-4">My Inventory</h2>
                <div>
                    <Filters onFilter={this.handleFilter}/>
                    <ProductTable productList = {this.state.productList} onDestroy={this.handleDestroy} filterText={this.state.filterText}/>
                    <ProductForm onSave={this.handleSave} onDestroy={this.handleDestroy}/>
                </div>
            </div>
        );
    }

}

export default Product
