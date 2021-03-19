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
});

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

//4a) ??????????????????????????????????????????????????????/
const darkMode = document.querySelector(`#dm`);
const body = document.getElementsByTagName(`body`);
console.log(body);

//4b)
// darkMode.addEventListener(`click`, () => {
//     for(item of body) {
//         body.classList.toggle(`dark-mode`);
//     }
// });

// darkMode.addEventListener(`click`, () => {
//     for (item of body){
//         body.classList.toggle(`dark-mode`);
//     }
// });

// for (loop of body){
//     darkMode.addEventListener(`click`, () => {
//         body.classList.toggle(`dark-mode`);
//     });
// }

//5a)
const reality = document.querySelector(`#reality`);

//5b)
reality.addEventListener(`click`, () => {
    alert(`You have successfully moved to another reality`);
});

//5c)
