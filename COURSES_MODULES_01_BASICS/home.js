

/* **************************************** //
                Variables
// **************************************** */


const b = "Smoothie";
console.log ( b );

const someNumber = 45;
console.log ( someNumber );

// const age = prompt("What is your age?");
// document.getElementById("someText").innerHTML = `${age} ans`;

/* **************************************** //
               Numbers in JS
// **************************************** */


var num1 = 10;
// num1 = num1 + 1;

//increment by 1
num1 ++;
num1 ++;
console.log ( num1 );

//decrement by 1
num1 --;

//decrement by any umber
num1 -= 2;
console.log ( num1 );

//Divide /, Multiply *, remainder %
console.log ( num1 % 6 );
console.log ( num1 * 6 );
console.log ( num1 / 6 );

/* **************************************** //
           Functions in JS
// **************************************** */

/*
* 1. create function
* 2. call the function
* */

//create
function fun () {
    console.log ( "COUCOU USHER" );
}

//call
fun ();

/*
* create a function that take in a name and says hello
*  follewed by your name
*
* for example:
* Name: usher
* return : " Hello Usher"
* */

// const name = prompt ( "what's your name ?" );
//
// function greeting ( yourName ) {
//
//     const result = `Hello ${ yourName }`;
//
//     console.log ( result );
// }
//
// greeting ( name );

// Functions with arguments
//how to add 2 numbers together in a function?
function sumNumbers ( num3, num2 ) {
    var result = num3 + num2;
    console.log ( result );
}

sumNumbers ( 10, 25 );

/* **************************************** //
               While Loops
// **************************************** */

let num4 = 0;
while ( num4 < 100 ) {
    num4 += 1;
    console.log ( "while " + num4 );
}


/* **************************************** //
               For Loops
// **************************************** */

for ( let num5 = 0; num5 <= 100; num5 ++ ) {
    console.log ( "for " + num5 );
}

/* **************************************** //
               Data Types
// **************************************** */

let yourAge = 18;             //number
let yourName = "Bob";       //string
let name = {
    first : "Jane"
    , last: "Doe"
};                          //object
let truth = false;           //boolean
let groceries = [ "apple", "banana", "oranges" ]; //array
let random;                 //undefined
let nothing = null;          //null

/* **************************************** //
               Strings in JS
// **************************************** */

let fruit = "banana,apple,orange,blackberry";
console.log ( fruit.length );           //string length
console.log ( fruit.indexOf ( "pl" ) );           //get index of a character
let moreFruits = "apple\nbanana";           //add new line
console.log ( moreFruits );
console.log ( fruit.slice ( 2, 5 ) ); //cut the string including first number and up to second
// numbers(not include it )
console.log ( fruit.replace ( "ban", "123" ) ); //replace fist arg by second arg
console.log ( fruit.toUpperCase () );  //to uppercase
console.log ( fruit.toLocaleLowerCase () );  //to lowercase
console.log ( fruit.charAt ( 2 ) ); //get the character by index
console.log ( fruit[ 2 ] );  //get the character by index
console.log ( fruit.split ( "," ) ); //separate all the character by a separator and get it in
// a list
console.log ( fruit.split ( "" ) ); //separate by character
// a list

/* **************************************** //
                Array in JS
// **************************************** */

//two different declaration of array
let fruits = [ "banana", "apple", "pineapples", "orange" ];
fruits = new Array ( "banana", "apple", "pineapples",
                     "orange"
);
console.log ( fruits );
console.log ( fruits[ 1 ] ); //get value in array by index
fruits[ 0 ] = "pear";  //change value by index
console.log ( fruits );

//loop in array
for ( let i = 0; i < fruits.length; i ++ ) {
    console.log ( `Fruit ${ i }: ${ fruits[ i ] }` );
}

// array common methods
console.log ( "To String :", fruits.toString () ); //convert array to string
console.log ( fruits.join ( " * " ) ); //join a special character to array element
console.log ( fruits.pop (), fruits ); //remove the last element in array
console.log ( fruits.push ( "blackberries" ), fruits ); //add element at the end of array
fruits[ fruits.length ] = "new fruit";
console.log ( fruits );
fruits.shift ();
console.log ( fruits ); //remove the first element in array
fruits.unshift ( "kiwi" );
console.log ( fruits ); //add  first element in array

let vegetables = [ "asparagus", "romato", "brocoli" ];

//combine  arrays
let allGroceries = fruits.concat ( vegetables );
console.log ( allGroceries );
console.log ( allGroceries.slice ( 1, 4 ) );
console.log ( allGroceries.reverse () ); //reverse array
console.log ( allGroceries.sort () ); // ranger par ordre alphabétique
//ranger des nombres  par ordre croissant
let someNumbers = [ 5, 10, 2, 25, 3, 255, 1, 2, 5, 334, 321,
                    2
];
console.log ( someNumbers.sort (
    function ( a, b ) {return a - b;} ) );
//ranger des nombres par ordre décroissant
console.log ( someNumbers.sort (
    function ( a, b ) {return b - a;} ) );

//create empty array and fill it
let emptyArray = new Array ();
for ( let num6 = 1; num6 <= 10; num6 ++ ) {
    emptyArray.push ( num6 );
}
console.log ( emptyArray );

/* **************************************** //
                Objects in JS
// **************************************** */

let student = {
    first      : "usher",
    last       : "Kadio",
    age        : 37,
    height     : 174,
    studentInfo: function () {
        return `${ this.first } ${ this.last } agé de ${ this.age } et mesurant ${ this.height } cm`;
    }
    
};
console.log ( student );
console.log ( student.first ); //get element in object
console.log ( student.last ); //get element in object
// student.first = "notUsher"; //change object value
console.log ( student.first );
student.age ++;
console.log ( student.age ); //increment object number value
//called a function added in object
console.log ( student.studentInfo () );

/* **************************************** //
                Conditionals in JS
// **************************************** */
//if else if else

//&& AND / || OR
var yourAge1 = 35;
if ( ( yourAge1 >= 18
) && ( yourAge1 <= 25
) ) {
    status = "target demo";
    console.log ( status );
}
else if ( ( yourAge1 >= 26
) && ( yourAge1 <= 35
) ) {
    status = "not my auddience";
    console.log ( status );
    
}
else {
    status = "target customer";
    console.log ( status );
}

// Switch
switch ( 0 ) {
    case 0:
    case 5:
        text = "friday";
        break;
    case 6:
        text = "weekend";
        break;
    default:
        text = "weekday";
}
console.log ( text );



