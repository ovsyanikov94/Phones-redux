export const ADD_IN_CART = 'ADD_IN_CART';

export const ADD_IN_CART_ACTION = {
    type: ADD_IN_CART,
    payload: null
};


/*
 * action creators
 */

export function AddInCartActionCreator( cart ){
    ADD_IN_CART_ACTION.payload = cart;
    return ADD_IN_CART_ACTION;
}