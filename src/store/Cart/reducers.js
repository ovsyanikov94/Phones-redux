"use strict";

import { LOAD_CART, REMOVE_IN_CART } from './actions';
import { ADD_IN_CART } from '../Phone/actions';

const initialState = {

    cart: []

};


function CartReducer( state = initialState , action ) {

    console.log('ACTION:' , action );

    switch( action.type ){

        case LOAD_CART: {

            return {
                ...state,
                cart: action.payload
            };

        }//LOAD_CART

        case ADD_IN_CART: {

            return {
                ...state,
                cart: action.payload
            };

        }//ADD_IN_CART

        case REMOVE_IN_CART: {

            return {
                ...state,
                cart: action.payload
            };

        }//ADD_IN_CART


    }//switch

    return state;

}//PhoneListReducer


export default CartReducer;