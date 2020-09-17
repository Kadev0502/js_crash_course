console.log ( "========= 02 ========" );


class User {
  //constructor method => initialize value
  constructor ( firstName, lastName, userHobbies ) {
    //initial values of the arguments
    this.firstName = firstName;
    this.lastName = lastName;
    this.userHobbies = userHobbies;
  }
  
  getFullName = () => {
    return `${ this.firstName } ${ this.lastName }`;
  };
  
}

//create new object
let John = new User ( "John", "Davis",
                      [ "basketball", "golf" ]
);
console.log ( John );
//get data from the new object
console.log ( John.getFullName () );

let Usher = new User ( "usher", "kadio", [ "dancing" ] );
console.log ( Usher );
console.log ( Usher.userHobbies );
