import React from 'react';
import ProductItem from '../ProductItem/ProductItem';

function ProductList(props) {
    const { products } = props;

    return (
        <div className="row my-4 d-flex align-items-end">
            { products.map((product) => {
                return props.minRange < product.price && product.price < props.maxRange ?  <ProductItem
                    {...product}
                    key={product.id} 
                /> : null
            })}
        </div>
    );
}

export default ProductList;