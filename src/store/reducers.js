"use strict";

import { combineReducers } from 'redux';
import PhoneListReducer from './PhoneList/reducers';
import CartReducer from "./Cart/reducers";
import {routerReducer} from "react-router-redux";

// RootReducer === [ reducer1 , reducer2 , .... ]

export default combineReducers({
    phone: PhoneListReducer,
    cart: CartReducer,
    routing: routerReducer
});

