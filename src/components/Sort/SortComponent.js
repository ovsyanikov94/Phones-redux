import React from 'react';

class SortComponent extends React.Component{


    constructor(props) {
        super(props);

        console.log(this.props);

        this.onSortTypeChanged = this.onSortTypeChanged.bind(this)
    }//constructor

    render(){

        return (
            <p>
                Sort by:
                <select
                    onChange={this.onSortTypeChanged}
                >
                    <option value="Newest">Newest</option>
                    <option value="Alphabetical">Alphabetical</option>

                </select>
            </p>
        )
    }//render

    onSortTypeChanged(event){


        let value  = event.target.value;
        let phones = [];
        
        if( value === 'Alphabetical' ){

            phones = this.props.phones.sort( ( left , right )=>{

                return left.name > right.name ? 1 : -1;

            } );

        }//if
        else{

            phones = this.props.phones.sort( ( left , right )=>{

                return +left.age > +right.age ? 1 : -1;

            } );

        }//else


        this.props.onSortPhonesSuccess(phones);



    }//onSortTypeChanged

}//SortComponent

export default SortComponent;