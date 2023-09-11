// let elemP = document.querySelector('p')


// const userInput = (num) => {
//     let x = 1;
//     while(x <= num ) {
//         if(x % 3 === 0 && x % 5 === 0) {
//             console.log('FizzBuzz');
//         } else if(x % 5 === 0) {
//             console.log('Buzz')
//         } else if(x % 3 === 0) {
//             console.log('Fizz');
//         }else {
//             console.log(x);
//         }
//         x++;
//     }
// };
// let answer = parseInt(prompt("Please enter the number you wish."));
// userInput(answer);





// for(let i = 0; i < 100; i++) {
//     console.log(i);
// }

let availableChoices = ['Rock', 'Paper', 'Scissors'];

const getComputerChoice = () => {
    let compInput = Math.floor(Math.random() * availableChoices.length);
    return availableChoices[compInput];
}
























