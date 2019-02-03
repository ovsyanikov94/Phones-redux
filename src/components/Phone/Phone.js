import React from 'react';
import CartService from "../../services/CartService";

class PhoneComponent extends React.Component{

    constructor( props ){
        super(props);
        this.cartService = new CartService();

    }//constructor

    addPhone(){

        this.cartService.addPhone(this.props.phone);

        let cart = this.cartService.getCart();

        this.props.onAddInCart(cart);

    }//addPhone

    render(){

        const { phone } = this.props;

        return (
            <li className="thumbnail">
                <a href="#!/phones/motorola-xoom-with-wi-fi" className="thumb">
                    <img alt="Motorola XOOM™ with Wi-Fi" src={phone.imageUrl} />
                </a>

                {(

                    !this.cartService.isInCart(phone.age) && <div className="phones__btn-buy-wrapper">
                    <span className="btn btn-success" onClick={this.addPhone.bind(this)}>
                        Add
                    </span>
                    </div>

                )}

                <a href="#!/phones/motorola-xoom-with-wi-fi">{phone.name}</a>
                <p>{phone.snippet}</p>

            </li>
        )

    }

}

export default PhoneComponent;