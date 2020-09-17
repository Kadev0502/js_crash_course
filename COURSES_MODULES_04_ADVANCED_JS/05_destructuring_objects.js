//object destructuring
let fullName = {
    firstName: "usher",
    lastName : "KADIO"
};

const { firstName, lastName } = fullName;
console.log ( firstName );
console.log ( lastName );

//array destructuring
let user = [
    {
        firstName2: "john",
        lastName2 : "Senna"
    },
    ( user ) => {
        console.log ( "I set the user", user );
    }

];
//new user = a l'objet de la variable user et setUser est la
// fonction de la variable user
let [ newUser, setUser ] = user;
console.log ( newUser );
setUser ( { firstName2: "Cool", lastName2: "Stuff" } );