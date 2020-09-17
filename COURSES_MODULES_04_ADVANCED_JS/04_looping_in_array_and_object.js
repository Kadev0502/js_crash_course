//normal loop
console.log ( "====================" );
console.log ( "normal loop" );
console.log ( "====================" );

let fruits = [ "apple", "banana", "orange", "cherries",
               "jackfruits", "guava"
];
console.log ( "for loop: " );
for ( let i = 0; i <= fruits.length; i ++ ) {
    console.log ( fruits[ i ] );
}
console.log ( "====================" );
//for...of => we can modify //it's a function to loop in  an
// object
console.log ( "for...of" );
console.log ( "====================" );

for ( let fruit of fruits ) {
    console.log ( fruit );
}

console.log ( "====================" );
//forEach => we can modify it //it's a function to loop in an
// array
console.log ( "forEach" );
console.log ( "====================" );

fruits.forEach ( ( fruit ) => {
    console.log ( fruit );
} );

console.log ( "====================" );
//map => return a new array can we can modify if we can
// it's a fonction to loop in an array
console.log ( "MAP" );
console.log ( "====================" );
newFruits = fruits.map ( ( fruit ) => {
    return fruit;
} ).filter ( ( value => {
        return value !== "banana";
    }
             ) );
console.log ( newFruits );