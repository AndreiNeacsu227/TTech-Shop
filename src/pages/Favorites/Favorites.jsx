import React from 'react';
import Layout from '../../components/Layout/Layout';
import { connect } from 'react-redux';
import { removeFromFavorites } from '../../redux/favorites/favoritesActions';
import { Link } from 'react-router-dom';
import { ReactComponent as Close} from '../../assets/icons/close.svg';

function Favorites(props) {


    return(
        <Layout>
            <div className="cart-page container-fluid container-min-max-width
                d-flex flex-column justify-content-center align-items-center">
                {
                    props.products.length
                    ? <div className="w-100">
                        <div className="d-flex justify-content-center text-center h4 text-bold">
                           <h2>FAVORITE</h2>
                        </div>
                        {
                            props.products.map(product => {
                                return <div className="d-flex justify-content-center align-items-center text-center mb-3" key={product.id}>
                                    <div className="w-25 d-flex flex-column justify-content-center align-items-center">
                                        <img src={product.image} alt="Produs"/>
                                    </div>
                                    <div className="w-25 d-flex justify-content-center">
                                        <div onClick={() => props.removeFromFavorites({id: product.id})}>
                                            <Close />
                                        </div>
                                    </div>
                                </div>
                            })
                        }
                        <div className="d-flex justify-content-end border-top">
                            <div className="w-25 d-flex align-items-center justify-content-center">
                            </div>
                        </div>
                    </div>
                    : <div className="d-flex flex-column align-items-center">
                        <p className="h3">Nu ai produse la favorite!</p>
                        <Link to="/"><button className="btn btn-outline-dark">Inapoi la home</button></Link>
                    </div>
                }
            </div>
        </Layout>
    );
}

function mapStateToProps(state) {
    return {
        products: state.favorites.products,
        productId: state.favorites.productId
    };
}

function mapDispatchToProps(dispatch) {
    return {
        removeFromFavorites: (payload) => dispatch(removeFromFavorites(payload))
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);