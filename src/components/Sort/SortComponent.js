import React from 'react';

class SortComponent extends React.Component{


     SortTypeChanged(event){

         debugger;

         this.setState({
             value: event.target.value
         });

        let value  = event.target.value;
        let phonesNew = [];

        let phones =  this.props.phones;

        console.log('phones', phones);
        if( value === 'Alphabetical' ){

            phonesNew = phones.sort( ( left , right )=>{

                return left.name > right.name ? 1 : -1;

            } );


            console.log('phones alh=pha', phonesNew);
        }//if
        else{

            phonesNew = phones.sort( ( left , right )=>{

                return +left.age > +right.age ? 1 : -1;

            } );

            // phonesNew = [{
            //     "age": 0,
            //     "id": "motorola-xoom-with-wi-fi",
            //     "imageUrl": "img/phones/motorola-xoom-with-wi-fi.0.jpg",
            //     "name": "Motorola XOOM\u2122 with Wi-Fi",
            //     "snippet": "The Next, Next Generation\r\n\r\nExperience the future with Motorola XOOM with Wi-Fi, the world's first tablet powered by Android 3.0 (Honeycomb)."
            // },
            //     {
            //         "age": 1,
            //         "id": "motorola-xoom",
            //         "imageUrl": "img/phones/motorola-xoom.0.jpg",
            //         "name": "MOTOROLA XOOM\u2122",
            //         "snippet": "The Next, Next Generation\n\nExperience the future with MOTOROLA XOOM, the world's first tablet powered by Android 3.0 (Honeycomb)."
            //     },
            //      ]
            console.log('phones newwest', phonesNew);

        }//else


        this.props.onSortPhonesSuccess(phonesNew);



    }//onSortTypeChanged

    constructor(props) {
        super(props);

        this.state = {
            value :'Newest'
        }

        this.SortTypeChanged = this.SortTypeChanged.bind(this)
    }//constructor

    render(){

        return (
            <p>
                Sort by:
                <select
                    value={this.state.value}
                    onChange={this.SortTypeChanged}
                >
                    <option value="Newest">Newest</option>
                    <option value="Alphabetical">Alphabetical</option>

                </select>
            </p>
        )
    }//render



}//SortComponent

export default SortComponent;