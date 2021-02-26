const initialState = {
    products: [],
    productId : []
}

export function favoritesReducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_TO_FAVORITES':

            let productInCart = false;
            const updatedProducts = state.products.map(product => {
                if (product.id === action.payload.product.id) {
                    productInCart = true;
                    return {
                        ...product,
                        quantity: 1
                    }
                } else {
                    return product;
                }
            })

            if (!productInCart) {
                return Object.assign({}, state, {
                    products: [
                        ...state.products,
                        {
                            ...action.payload.product,
                            
                        }
                    ],
                    productId: [
                        ...state.productId, action.payload.product.id
                    ] 
                })
            } else {
                return Object.assign({}, state, {
                    products: updatedProducts
                });
            }
            
        case 'REMOVE_FROM_FAVORITES':
            const filteredProducts = state.products.filter(product => {
                return product.id !== action.payload.id
            });

            const filteredProductsId = state.productId.filter(productId => {
                return productId !== action.payload.id
            });

            return Object.assign({}, state, {
                products: filteredProducts,
                productId : filteredProductsId
            });
        default:
            return state;
    }
}

