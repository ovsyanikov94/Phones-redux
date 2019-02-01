import React from 'react';

class PhoneComponent extends React.Component{

    constructor( props ){
        super(props);
    }//constructor

    render(){

        const { phone } = this.props;

        return (
            <li className="thumbnail">
                <a href="#!/phones/motorola-xoom-with-wi-fi" className="thumb">
                    <img alt="Motorola XOOM™ with Wi-Fi" src={phone.imageUrl} />
                </a>

                <div className="phones__btn-buy-wrapper">
                    <a className="btn btn-success">
                        Add
                    </a>
                </div>

                <a href="#!/phones/motorola-xoom-with-wi-fi">{phone.name}</a>
                <p>{phone.snippet}</p>

            </li>
        )

    }

}

export default PhoneComponent;