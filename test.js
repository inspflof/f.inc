// let a = 0
// let c=0
// let d=0

// function getRandomInt(max) {
//     a = Math.floor(Math.random() * max);
//   }
//   console.log(getRandomInt(1000));

// b = prompt(`Devinez le nombre`)

// while (c == 0){
//     if (b>a){
//         d=d+1
//         b=prompt(`c'est moins`)
//     }
//     else if (b<a){
//         d=d+1
//         b=prompt(`c'est plus`)
//     }
//     else if (b==a){
//         c=1
//         console.log(`Félicitation, vous avez gagné. Le nombre était : `, a, `Vous avez fait `,d, `erreurs`)
//     }
//     else if (b !== a){
//         c=1
//         console.log(`Le caractere `,b,` n'est pas valide`)
//     }
// }

// --------------------------------------------------------

// const words = prompt(`Donne un mot`);

// function isPalindrome(word) {
//   let test = word.split(``).reverse().join(``);
//   if (test == word) {
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isPalindrome(words.toUpperCase()));

// -----------------------------------------------------

const students = [
  {
    name: "John",
    notes: [1, 20, 18, 19, 12],
  },
  {
    name: "Jane",
    notes: [17, 18, 20, 13, 15],
  },
  {
    name: "Sophie",
    notes: [17, 12, 14, 15, 13],
  },
  {
    name: "Marc",
    notes: [2, 3, 5, 8, 9],
  },
  {
    name: "Manon",
    notes: [18, 17, 18, 19, 12],
  },
];

const notes = [1, 2, 3];
const initialValue = 0;
const total = notes.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

// function moyenne (){

// }
