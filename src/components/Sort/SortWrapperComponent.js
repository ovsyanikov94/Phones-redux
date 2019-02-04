import React from 'react';
import { connect } from "react-redux";
import SortComponent from './SortComponent';

import { sortPhonesActionCreator} from '../../store/Sort/action';

class SortWrapperComponent extends  React.Component{

    constructor(props) {
        super(props);

    }

    render(){
        const {phones, sortPhonesSuccess } = this.props;

        return (

            <SortComponent
                phones = {phones}
                onSortPhonesSuccess = {sortPhonesSuccess}
            />
        );
    }

}//SortWrapperComponent

const mapStateToProps = ( state )=>{

    return {
        phones: state.phone.phones
    }; // PROPS

};

const mapDispatchToProps = dispatch => {
    return {
        sortPhonesSuccess: ( phones ) => {
            dispatch( sortPhonesActionCreator( phones ))
        }
    };
};

export default  connect(
    mapStateToProps,
    mapDispatchToProps
)(SortWrapperComponent);