function badOrGoodMovies ( move_rating ) {
    let movie_result;
    if ( move_rating <= 6 ) {
        movie_result = "this is a bad movie";
    }
    else if ( ( move_rating > 6
    ) && ( move_rating <= 10
    ) ) {
        movie_result = "this is a good movie";
    }
    else {
        movie_result = "this movie rating not out yet";
    }
    return movie_result;
}

console.log (badOrGoodMovies ( 7 ));