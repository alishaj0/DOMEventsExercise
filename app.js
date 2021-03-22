// DOM EVENTS EXERCISE

//1a)
const button1 = document.querySelector(`#one`);

//1b)
button1.onclick = () => alert(`Cool! You can hear/understand a hummingbird and ants`);

//2a)
const h3 = document.querySelector(`h3`);

//2b)
h3.addEventListener(`mouseenter`, () => {
    alert(`OH NO! The squirrels are on to you. Now you have to leave this reality and move to a new one`);
});             // ALSO don't need {} in arrow function because it is only one command
                // `mouseover` or   `mouseenter` will work

//BONUS

//3a)
const form = document.querySelector(`form`);
console.dir(form);

//3b)
form.addEventListener(`submit`, q => {
    q.preventDefault();
    const newQuote = form.elements.quote.value;
    alert(newQuote);
});
        // .addEventListener to selected form, 
        // upon SUBMIT will .preventDefault (not send information elsewhere) 
        // will submit entered text as the '.value' of 'quote' which is an 'element' inside of the 'form' and will assign to variable of 'newQuote' 
        // will alert(newQuote) on screen to user.. also: alert(`${newQuote});



//4a)
const darkMode = document.querySelector(`#dm`);

//4b)
darkMode.addEventListener(`click`, () => {
    for (element of document.querySelectorAll(`*`)) {
        element.classList.toggle(`dark-mode`);
    }
});
        // When click on 'darkMode' button will apply dark-mode style FOR every (element of document.querySelectorAll(`*`)){}.
            // .addEventListener, upon click, anonymous arrow function inside of loop will run.
            // Loop will run for every "element of document.querySelectorAll(`*`)"
            // Will return a NodeList of every element and will iterate through NodeList and for every element, will "toggle from classList"  the parameter of 'dark-mode'



//5a)
const reality = document.querySelector(`#reality`);

//5b)

let i = 1;
function realityJump(){
    if (i < 3){
        alert(`You have successfully moved to another reality!`);
        i++;
    } else{
        alert(`OH NO! You can only move to another reality a couple of times. You are stuck in this realtity!`);
        reality.removeEventListener(`click`, realityJump);
    }
}
reality.addEventListener(`click`, realityJump);


// let variable declaring i = 1; 
// using reality button to addEventListener with function 'realityJump' to run when button is clicked.
    // when realityJump is run first time, i = 1;
        // if click1 < 3 {alert(`You have successfully moved ....);}
        // then add click1 + 1 =2 (1++), so i = 2; 2 < 3: {alert(`You have successfully moved...);}
        // then add click2 + 1 =3 (2++), so i = 3; 3 < 3: false- move to else statement
            // else {alert(`OH NO! You can only move to another reality....);} then removeEventListener from 'reality' variable upon next click (click4)
            // end else statement
        // end if statement
    // end realityJump function
// RUN reality.addEventListener(`click`, realityJump(function));


// OR
/*
let i = 1;
reality.addEventListener(`click`, () => {
    if (1 < 3){
        alert(`You have successfully moved to another reality`);
        i++;
    } else if (i === 3){
        alert(`OH NO! You can only move to a new reality a couple of times. You are stuck in this reality!`);
    }
    i++;
});
*/
        // let i = 1;
        // addEventListener to reality variable, upon click, anonymous function will run which has a loop inside that will run upon every click.
        // for click1 : click1 < 3 alert(`You have successfully moved to another reality`);
            // then i++ (click1 + 1 = 2); 2 < 3; alert(`You have successfully...);
            // then i++ (click2 + 1 = 3); 3 < 3: false, move to ELSE IF statement
                    // else if (3 === 3) is true, run alert(`OH NO! You can only....);
                    // end nested function
            // click 3++ (=4) (will continue with clicks but will not run anything )
        // end function