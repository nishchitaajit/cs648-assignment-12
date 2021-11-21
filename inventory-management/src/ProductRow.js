import React from 'react'

class ProductRow extends React.Component {
    constructor(props) {
        super(props)
        this.destroy = this.destroy.bind(this)
    }

    destroy () {
        this.props.onDestroy (this.props.product.id);
    }

    render () {
        return (
            <tr>
                <td>{this.props.product.name}</td>
                <td>{this.props.product.category}</td>
                <td>${this.props.product.price}</td>
                <td><button onClick={this.destroy} class="btn btn-primary">Delete</button></td>
            </tr>
        );
    }
}

export default ProductRow
