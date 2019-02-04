import React from 'react';
import PhoneComponent from "../Phone/Phone";
import PhoneWrapperController from "../Phone/PhoneWrapperController";

import PhoneService from '../../services/PhoneService';

class PhoneListComponent extends React.Component{

    async LoadPhonesFromServer(){

        let response = await this.PhoneService.GetPhones('phones/phones.json');

        this.props.onLoadPhonesSuccess( response );

    }//LoadPhonesFromServer

    componentDidMount() {

        this.LoadPhonesFromServer();

    }//

    constructor( props ){

        super(props);

        this.PhoneService = new PhoneService();
        this.LoadPhonesFromServer = this.LoadPhonesFromServer.bind(this);

        console.log('PROPS: ' , props);

    }//constructor

    render(){

        const { phones } = this.props;

        const phonesHTML = phones.map( phone =>
            
            <PhoneWrapperController key = {phone.id} phone={phone} /> );

        return (
            <ul className='phones'>
                {phonesHTML}
            </ul>
        );

    }//render

}//PhoneListComponent

export default PhoneListComponent;