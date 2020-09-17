//normal functions
function getFullName () {
    
    let firstName = "usher";
    let lastName = "Kadio";
    return `${ firstName } ${ lastName }`;
}

let output = getFullName ();
console.log ( output );

//in arrow function

getFullName2 = () => {
    let firstName2 = "xavier";
    let lastName2 = "Donald";
    return `${ firstName2 } ${ lastName2 }`;
};
let output2 = getFullName2 ();
console.log ( output2 );

///more short
let firstName3 = "hello";
let lastName3 = "world";

getFullName3 = ( firstName3, lastName3 ) => console.log (
    `${ firstName3 } ${ lastName3 }` );
getFullName3(firstName3,lastName3)