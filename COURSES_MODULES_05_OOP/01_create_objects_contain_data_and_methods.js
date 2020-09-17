console.log ("========= 01 ========");

let user = {
  firstName     : "usher",
  lastName      : "kadio",
  setPassword   : ( user, password ) => {
    user.password = password;
  },
  "user Hobbies": [
    "soccer",
    "volleyball"
  ],
  getFullName   : ( user ) => {
    return `${ user.firstName } ${ user.lastName }`;
  }
};
console.log ( user );
//get the fonction in the object out
console.log ( user.getFullName ( user ) );
//get user information out
console.log ( user.firstName );

console.log (user["user Hobbies"]);
console.log (user["user Hobbies"][0]);

console.log ("=================");

//check if a data exist in an object
if ( "firstName"  in user) {
  console.log ( " firstname exist" );
}
if ( "randomAttribute"  in user) {
  console.log ( " randomAttr exist" );
}else{
  console.log ( " randomAttr not exist" );
}
console.log ("=================");
//loop in an object
for ( let prop in user ) {
  console.log (user[prop]);
}
