import React from "react";
import PhoneService from "../../services/PhoneService";

class SinglePhoneComponent extends React.Component{

    constructor( { match , props} ) {
        super(props);

        this.state = {
            phone: {}
        };

        this.phoneService = new PhoneService();
        this.phoneService
            .GetPhones(`/phones/${match.params.id}.json`)
            .then( this.loadPhone.bind ( this ) );
        ;

    }//constructor

    loadPhone( phone ){

        this.setState({
            phone: phone
        });

    }//loadPhone

    render(){

        return (
            <h2>Hello!</h2>
        );

    }//render

}

export default SinglePhoneComponent;