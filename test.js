let a = 0
let c=0
let d=0

function getRandomInt(max) {
    a = Math.floor(Math.random() * max);
  }  
  console.log(getRandomInt(1000));

b = prompt(`Devinez le nombre`)

while (c == 0){
    if (b>a){
        d+1
        b=prompt(`c'est moins`)
    }
    else if (b<a){
        d+1
        b=prompt(`c'est plus`)
    }
    else if (b==a){
        c=1
        console.log(`Félicitation, vous avez gagné. Le nombre était : `, a, `Votre score est de : `,d)
    }
    else if (b !== a){
        c=1
        console.log(`Le caractere `,b,` n'est pas valide`)
    }
}

// ----------------------------------------------------------

// function candrive (age, pays) {
//     if (
//         (age >= 18 && pays === `FR`) ||
//         (age >= 16 && pays === `US`)
//     ) {
//         return true
//     }
//     return false
// }

// console.log(candrive(19, `FR`))

// const a = {
//     firstname: `John`,
//     lastname:`Doe`,
//     fullname: function (){
//         console.log(this.firstname, this.lastname)
//     }
// }

// const mafonction = (p1, p2) =>{
//     console.log(p1, p2)
// }

// mafonction(1,2)