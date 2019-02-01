import React from 'react';
import PhoneService from "../../services/PhoneService";

class SearchComponent extends React.Component{

    async onSearchPhones( event ){

        let queryString = event.target.value.toLowerCase();

        let responsePhones = await this.PhoneService.GetPhones('phones/phones.json');

        let phones = responsePhones.filter( p => {
            return p.name.toLowerCase().indexOf( queryString ) !== -1;
        } );

        this.props.onSearchPhonesSuccess( phones );

    }//onSearchPhones

    constructor( props ){

        super(props);

        this.onSearchPhones = this.onSearchPhones.bind(this);
        this.PhoneService = new PhoneService();

    }//constructor

    render(){

        return (
            <p>
                Search:
                <input onChange={this.onSearchPhones} />
            </p>
        )

    }

}

export default SearchComponent;