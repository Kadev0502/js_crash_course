//
//
/*
THEN => for success
CATCH => for error
le console log qui est hors de la promesse s'affiche immédiatement
les console log a l'intérieur de la promesse s'affiche en cas
 de succès (then)  après 2s
 sinon c'est le console log d'erreur (catch) qui s'affiche
* */

let promise = new Promise ( ( resolve, reject ) => {
    setTimeout ( () => {
        resolve ( {
                      firstName: "usher",
                      lastName : "kadio"
                  } );
        reject ( "something went wrong" );
    }, 2000 );
} );
promise.then ( ( response ) => {
    console.log ( "here is the response after 2s" );
    console.log ( response );
} ).catch ( ( error ) => {
    console.log ( error );
} );
console.log ( "this is a part 1" );