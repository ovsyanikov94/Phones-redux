import React from 'react';
import { connect } from 'react-redux';
import CartComponent from "./CartComponent";

import {
    LoadCartActionCreator,
    RemoveInCartActionCreator
} from '../../store/Cart/actions';


class CartWrapperComponent extends React.Component{

    constructor( props ){

        super(props);

    }//constructor

    render(){

        const {
            cart,
            loadCartSuccess,
            removePhoneInCart
        } = this.props;

        return (
            <CartComponent
                cart = {cart}
                onLoadCartSuccess = {loadCartSuccess}
                onRemoveInSuccess = {removePhoneInCart}
            />
        );
    }

}//CartWrapperComponent

const mapStateToProps = ( state )=>{

    return {
        cart: state.cart.cart
    }; // PROPS

};

const mapDispatchToProps = dispatch => {
    return {
        loadCartSuccess: ( cart ) => {
            dispatch( LoadCartActionCreator( cart ))
        },
        removePhoneInCart: (cart)=>{
            dispatch(RemoveInCartActionCreator(cart))
        }
    };
};


export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(CartWrapperComponent)