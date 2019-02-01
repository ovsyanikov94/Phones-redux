import React from 'react';
import { connect } from 'react-redux';
import Search from "./Search";

import {
    searchPhonesActionCreator
} from '../../store/Search/actions';


class SearchWrapperComponent extends React.Component{

    constructor( props ){

        super(props);

    }//constructor

    render(){

        const {
            phones,
            searchPhonesSuccess
        } = this.props;

        return (
            <Search
                phones={phones}
                onSearchPhonesSuccess={searchPhonesSuccess}
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
        searchPhonesSuccess: ( phones ) => {
            dispatch( searchPhonesActionCreator( phones ))
        }
    };
};


export default connect(
    mapStateToProps ,
    mapDispatchToProps
)(SearchWrapperComponent);