//require express from node modules
const express = require ( "express" );
const app = express ();



//use the express to request
app.get ( "/", ( req, res ) => {
  res.status ( 200 ).send ( "Hello World" );
} );

//initialize the server
app.listen ( 8300, () => console.log ( "Listening on" +
                                         " localhost:8300" ) );

//to launch the server, in the terminal type: nodemon app.js