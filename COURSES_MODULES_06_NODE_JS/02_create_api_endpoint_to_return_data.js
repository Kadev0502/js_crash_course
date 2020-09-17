
const express = require ( "express" );
const app = express ();

const posts=[{
  "id": "1581461442206",
  "title": "This is a New Blog Post",
  "content": "This is the content! ",
  "post_image": "uploads/post-image-1581461442199.jpg",
  "added_date": "1581461442206"
}]

//change the server route and add the data in the send arguments
app.get ( "/api/posts", ( req, res ) => {
  res.status ( 200 ).send ( posts );
} );

app.listen ( 8300, () => console.log ( "Listening on" +
                                         " localhost:8300" ) );

//to launch the server, in the terminal type: nodemon app.js