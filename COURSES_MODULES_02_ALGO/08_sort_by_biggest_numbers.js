function sortByRatingFirst ( numbers ) {
    for ( let j = 0; j < numbers.length - 1; j ++ ) {
        //take first element as max number
        let max_num = numbers[ j ];
        //get the max number location
        let max_location = j;
        //make a loop in an array
        for ( let i = j; i < numbers.length; i ++ ) {
            //check if elements in array are > than first element
            if ( numbers[ i ] > max_num ) {
                //get max number and it's location
                max_num = numbers[ i ];
                max_location = i;
            }
        }
        //swap the biggest element at the first index
        numbers[ max_location ] = numbers[ j ];
        numbers[ j ] = max_num;
    }
    return numbers;
}

console.log ( sortByRatingFirst (
    [ 5, 17, 8, 9, 312, 18, 14, 35 ] ) );

/* same function*/

function findMaxHelper ( numbers, start ) {
    let maximum = numbers[ start ];
    let max_location = start;
    
    for ( let i = start; i < numbers.length; i ++ ) {
        if ( numbers[ i ] > maximum ) {
            maximum = numbers[ i ];
            max_location = i;
        }
    }
    return { max_number: maximum, max_index: max_location };
}

// console.log(findMaxHelper([5, 2, 9, 3, 7], 3))
function sortBestWithHelper ( numbers ) {
    // run as many times as there are items
    let max_num;
    let max_location;
    let max;
    for ( let j = 0; j < numbers.length - 1; j ++ ) {
        
        // Find max number and max location starting from j
        max = findMaxHelper ( numbers, j );
        max_num = max[ "max_number" ];
        max_location = max[ "max_index" ];
        
        // swap the first and max item in an array
        numbers[ max_location ] = numbers[ j ]; //
        numbers[ j ] = max_num;
    }
    
    return numbers;
}

console.log ( sortBestWithHelper ( [ 5, 8, 2, 9, 3, 10 ] ) );
