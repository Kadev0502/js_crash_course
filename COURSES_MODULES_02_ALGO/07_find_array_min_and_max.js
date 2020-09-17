//find the minimum

function findMin ( numbers ) {
    //define first element in array
    let minimum = numbers[ 0 ];
    //loop in the array
    for ( let i = 0; i < numbers.length; i ++ ) {
        //check if the index element is small than first
        // element and replace it by the element we need
        if ( numbers[ i ] < minimum ) {
            minimum = numbers[ i ];
        }
    }
    //return the small element
    return minimum;
}

console.log ( `the minimum number is ${ findMin (
    [ 5, 17, 8, 9, 312, 18, 14, 35 ] ) }` );


//find the maximum

function findMax ( numbers ) {
    let maximum = numbers[ 0 ];
    for ( let i = 0; i < numbers.length; i ++ ) {
        if ( numbers[ i ] > maximum ) {
            maximum = numbers[ i ];
        }
    }
    return maximum;
}

console.log ( `the maximum number is ${ findMax (
    [ 5, 17, 8, 9, 312, 18, 14, 35 ] ) }` );