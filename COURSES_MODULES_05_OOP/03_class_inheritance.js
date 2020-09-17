console.log ( "========= 03 ========" );

class User2 {
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
//create class that extends User2 class
class AdminUser extends User2{
  setPassword = (password)=>{
    this.password = password
  }
}


//create new object
let John = new User2 ( "hello", "world",
                      [ "basketball", "golf" ]
);
//create new object which inheritance from User class
let Kadio = new AdminUser( "salut", "bonsoir",
                       [ "natation", "randonnee" ]
);
console.log ( John );
console.log ( Kadio );

