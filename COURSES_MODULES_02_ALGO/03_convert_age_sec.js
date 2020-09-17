/*
* convert years in months(*12)
* convert months to days(*30)
* convert days to hours(*24)
* convert hours to min(*60)
* convert min to sec(*60)
* then we get the seconds
* */
let age =37
function ageInSeconds ( age ) {
    return age * ( 12 * 30 * 24 * 60 * 60
    );
}

console.log (
    `you have ${age} years old  and = ${ ageInSeconds ( age)
     } seconds` );