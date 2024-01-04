let a = 0
let c=0

function getRandomInt(max) {
    a = Math.floor(Math.random() * max);
  }  
  console.log(getRandomInt(1000));

b = prompt(`Devinez le nombre`)

while (c == 0){
    if (b>a){
        b=prompt(`c'est moins`)
    }
    else if (b<a){
        b=prompt(`c'est plus`)
    }
    else{
        c=1
    }
}

console.log(`Félicitation, vous avez gagné. Le nombre était : `, a)