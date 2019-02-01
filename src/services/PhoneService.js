
class PhoneService{


    async GetPhones( path ){

        try{

            let response = await fetch( path );

            response = await response.json();
            console.log(response);

            return response;

        }//try
        catch(ex){

            console.log('Exception!')
            return null;

        }//catch


    }//GetPhones

}//PhoneService

export default PhoneService;