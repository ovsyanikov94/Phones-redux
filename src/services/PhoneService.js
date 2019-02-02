
class PhoneService{


    async GetPhones( path ){

        try{

            let response = await fetch( path );

            response = await response.json();

            return response;

        }//try
        catch(ex){

            console.log('Exception!')
            return null;

        }//catch


    }//GetPhones

}//PhoneService

export default PhoneService;