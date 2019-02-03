export const LOAD_CART = 'LOAD_CART';

export const LOAD_CART_ACTION = {
    type: LOAD_CART,
    payload: null
};

export const REMOVE_IN_CART = 'REMOVE_IN_CART';

export const REMOVE_IN_CART_ACTION = {
    type: REMOVE_IN_CART,
    payload: null
};

/*
 * action creators
 */

export function LoadCartActionCreator( cart ){
    LOAD_CART_ACTION.payload = cart;
    return LOAD_CART_ACTION;
}

export function RemoveInCartActionCreator( cart ){
    REMOVE_IN_CART_ACTION.payload = cart;
    return REMOVE_IN_CART_ACTION;
}