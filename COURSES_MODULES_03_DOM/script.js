/**
 * DONE: Update the text in the "Formatted Text" section as a
 * user types in the textarea
 * DONE TOGETHER: Add a .bold, .italic classes to "Formatted
 * Text" when the appropriate button is clicked
 * DONE: Add an .underline class to "Formatted Text" when
 * Underline button is clicked
 * DONE: Toggle the align style for "Formatted Text" when the
 * appropriate button is clicked
 */


/**
 * Update the output text as a user types in the textarea
 * HINT: Use the onkeydown function inside HTML
 */
    //put the input element id in a var
let textInput = document.getElementById ( "text-input" );
//put the output element id in a var
let textOutput = document.getElementById ( "text-output" );
//put the button list in a var
let buttonList = document.getElementsByClassName ( "align" );

function updateText () {
    
    console.log ( "you short the key" );
    //show the input value outside
    textOutput.innerText = textInput.value;
}

/**
 * Toggle the bold class for the output text
 * HINT: Use the onclick function insite HTML
 * HINT: Look into using this keyword
 * HINT: Use the classList property
 * HINT: Toggle .active class for the button
 */
function makeBold ( elem ) {
    console.log ( elem );
    //add a toggle class to input element
    elem.classList.toggle ( "active" );
    //use the toggle class to the output element
    textOutput.classList.toggle ( "bold" );
    
}

/**
 * Toggle the italic class for the output text
 */
function makeItalic ( elem ) {
    elem.classList.toggle ( "active" );
    textOutput.classList.toggle ( "italic" );
}

/**
 * Toggle the underline class for the output text
 * HINT: Toggle the .active class for the button
 * HINT: Use the classList property
 * HINT: Use contains, remove, and add functions
 */
function makeUnderline ( elem ) {
    elem.classList.toggle ( "active" );
    //check if element contain underline class and remove or
    // add it
    if ( textOutput.classList.contains ( "underline" ) ) {
        textOutput.classList.remove ( "underline" );
    }
    else {
        textOutput.classList.add ( "underline" );
    }
}

/**
 * Toggle the style textAlign attribute
 * Toggle the active state for the align butttons
 * HINT: Use the style property of the element
 * HINT: Make sure to untoggle the active state for all other align buttons
 */
function alignText ( elem, alignType ) {
    //add toggle class to the element
    elem.classList.toggle ( "active" );
    //add style class to the output element
    textOutput.style.textAlign = alignType;
    //remove the class active in all button
    for ( let i = 0; i <= buttonList.length; i ++ ) {
        buttonList[ i ].classList.remove ( "active" );
    }
    //add active class to the button we click
    elem.classList.add ( "active" );
}
