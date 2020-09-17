/**
 Fetch Data from API
 *
 **/
//get status 200
let userPromise = fetch ( "https://randomuser.me/api/" );
console.log ( userPromise );

//catch the response.json

userPromise.then ( ( response ) => {
    // console.log ( response.json () );
    return response.json ()
    
    //then catch the result
} ).then ( ( resData ) => {
               console.log (resData);
               console.log ( resData.results[0].name.first );
               console.log ( resData.results[0].name.last );
           } )
           .catch ( ( error ) => {
               console.log (error);
           } );