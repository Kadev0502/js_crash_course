const API_URL = "http://localhost:3000/api/posts";
const API_BASE_URL = "http://localhost:3000/";

window.onload = () => {
  getPosts ();
};

//where we fetch the datas from API
const getPosts = () => {
  fetch ( API_URL, {
    method: "GET"
  } ).then ( ( response ) => {
    return response.json ();
  } ).then ( ( data ) => {
    buildPosts ( data );
  } );
};

//build the data in the front page
const buildPosts = ( blogPosts ) => {
  let blogPostsContent = "";
  for ( let blogPost of blogPosts ) {
    //convert the date (which is a string ) to a number
    const postDate = new Date (
      parseInt ( blogPost.added_date ) ).toDateString ();
    //get the image url from api
    const postImage = `${ API_BASE_URL }${ blogPost.post_image }`;
    const postLink = `post.html?id=${ blogPost.id }`;
    blogPostsContent += `
      <a href="${ postLink }" class="post-link">
        <div class="post">
             <div class="post-image" style="background-image: url(${ postImage })"></div >
             <div class="post-content">
                <div class="post-content_date">${ postDate }</div >
                <div class="post-content_title"><h4 >${ blogPost.title }</h4 ></div >
                <div class="post-content_text"> ${ blogPost.content }</div >
             </div >
          </div >
      </a>
    `;
  }
  document.querySelector (
    ".blog-posts" ).innerHTML = blogPostsContent;
};

