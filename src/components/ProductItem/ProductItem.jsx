import React from 'react';
import './ProductItem.css';
import { connect } from 'react-redux';
import { addToCart } from '../../redux/cart/cartActions';
import { addToFavorites } from '../../redux/favorites/favoritesActions';
import { removeFromFavorites } from '../../redux/favorites/favoritesActions';
import { Link } from 'react-router-dom';
import { ReactComponent as FavoritesHeart } from '../../assets/icons/emptyHeart.svg';
import { ReactComponent as Liked } from '../../assets/icons/coloredHeart.svg';


function ProductItem(props) {
    const {name, price, currency, image, id} = props;

    return(
        <div className="product-item col-12 col-md-4 mb-3 d-flex flex-column align-items-center">
            <Link to={`/product/${id}`} className="d-flex flex-column align-items-center">
                <img src={image} alt="productPhoto" className="mb-2"/>
                <p className="mb-1 text-center">{ name }</p>
                <p className="text-center">{ price + currency }</p>
            </Link>
            <div className="w-100 d-flex justify-content-center">
            <button
                className="btn btn-outline-dark mr-5 addToCartBtn"
                onClick={() => props.addToCart({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
            >
                Adaugă în coș
            </button>
            
            {
                props.productId.includes(id) 
                ? <Liked className="liked" onClick={() => props.removeFromFavorites({id: id})} /> 
                : <FavoritesHeart className="addToFavoritesIcon"
                onClick={() => props.addToFavorites({
                    product: {
                        id,
                        name,
                        price,
                        currency,
                        image
                    }
                })}
                />
            }

            </div>
        </div>
    );
}

function mapDispatchToProps(dispatch) {
    return {
        addToCart: (product) => dispatch(addToCart(product)),
        addToFavorites: (product) => dispatch(addToFavorites(product)),
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}

function mapStateToProps(state) {
    return {
        favoriteProducts : state.favorites.products,
        productId : state.favorites.productId
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);