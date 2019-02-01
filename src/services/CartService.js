class CartService{

    constructor(){

        //this.cart = this.getCart();

    }//constructor

    addPhone( phone ) {

        let cart = this.getCart();

        if(cart.length === 0){

            localStorage.setItem('cart' , JSON.stringify([
                {
                    id: phone.age,
                    amount: 1,
                    name: phone.name
                }
            ]));

        }//if
        else{

            let phoneCheck = cart.find(
                p => p.id === phone.age
            );

            if( !phoneCheck ){

                cart.push(
                    {
                        id: phone.age,
                        amount: 1,
                        name: phone.name
                    }
                );

                localStorage.setItem('cart' , JSON.stringify( cart ));

            }//if

        }//else

    }//addPhone

    getCart(){

        try{

            let cart = JSON.parse(
                localStorage.getItem('cart')
            );

            return cart || [];

        }//try
        catch(ex){

            console.log('EXCEPTION!' , ex);

            return [];
        }//catch



    }//getCart

    isInCart( id ){

        let cart = this.getCart();

        return cart.find( p => p.id === id );

    }//isInCart

    removePhone( id ){

        let newCart = this.getCart().filter( p => +p.id !== +id );

        localStorage.setItem('cart' , JSON.stringify(newCart) );

    }//removePhone

}//CartService

export default CartService;