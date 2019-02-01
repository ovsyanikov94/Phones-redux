"use strict";

import { LOAD_PHONES } from './actions';
import { SEARCH_PHONES } from "../Search/actions";

const initialState = {

    phones: []

};


function PhoneListReducer( state = initialState , action ) {

    console.log('ACTION:' , action );

    switch( action.type ){

        case LOAD_PHONES: {

            return {
                ...state,
                phones: action.payload
            };

        }//LOAD_PHONES

        case SEARCH_PHONES: {
            return {
                ...state,
                phones: action.payload
            };
        }

    }//switch

    return state;

}//PhoneListReducer


export default PhoneListReducer;