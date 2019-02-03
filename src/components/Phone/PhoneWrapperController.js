import React from 'react';
import { connect } from 'react-redux';
import Phone from "./Phone";

import {
    AddInCartActionCreator
} from '../../store/Phone/actions';


class PhoneWrapperController extends React.Component{

    constructor( props ){

        super(props);

    }//constructor

    render(){

        const {
            cart,
            addInCartSuccess,
            phone
        } = this.props;

        return (
            <Phone
                phone={phone}
                cart={cart}
                onAddInCart={addInCartSuccess}
            />
        );
    }

}//PhoneListWrapperComponent

const mapStateToProps = ( state )=>{

    return {
        cart: state.cart.cart
    }; // PROPS

};

const mapDispatchToProps = dispatch => {
    return {
        addInCartSuccess: ( phones ) => {
            dispatch( AddInCartActionCreator( phones ))
        }
    };
};


export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(PhoneWrapperController);