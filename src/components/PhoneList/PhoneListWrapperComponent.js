import React from 'react';
import { connect } from 'react-redux';
import PhoneListComponent from "./PhoneList";

import {
    LoadPhonesActionCreator
} from '../../store/PhoneList/actions';

// function connect2( p1 , p2 ) {
//
//     //...
//     return function ( Wrapper ) {
//         //...
//     }
//
// }
// connect2( p1 , p2 )( Wrapper )

class PhoneListWrapperComponent extends React.Component{

    constructor( props ){

        super(props);

    }//constructor

    render(){

        const {
            phones,
            loadPhonesSuccess
        } = this.props;

        return (
            <PhoneListComponent
                phones={phones}
                onLoadPhonesSuccess={loadPhonesSuccess}
            />
        );
    }

}//PhoneListWrapperComponent

const mapStateToProps = ( state )=>{

    return {
        phones: state.phone.phones
    }; // PROPS

};

const mapDispatchToProps = dispatch => {
    return {
        loadPhonesSuccess: ( phones ) => {
            dispatch(LoadPhonesActionCreator( phones ))
        }
    };
};


export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(PhoneListWrapperComponent);