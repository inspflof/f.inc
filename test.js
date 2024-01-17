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

// const students = [
//     {
//       name: "John",
//       notes: [1, 20, 18, 19, 12],
//     },
//     {
//       name: "Jane",
//       notes: [17, 18, 20, 13, 15],
//     },
//     {
//       name: "Sophie",
//       notes: [17, 12, 14, 15, 13],
//     },
//     {
//       name: "Marc",
//       notes: [2, 3, 5, 8, 9],
//     },
//     {
//       name: "Manon",
//       notes: [18, 17, 18, 19, 12],
//     },
//   ];
  
//   const moyenne = (notes) => {
//     let sum = 0
//     for (let note of notes){
//       sum = sum + note
//     }
//     return sum / notes.length
//   }
  
//   const compareStudent = (a,b) => {
//     return b.moyenne - a.moyenne
//   }
  
//   for (let student of students){
//     student.moyenne = moyenne(student.notes)
//   }
  
//   students.sort(compareStudent)
  
//   const formatStudent = (student) => {
//     return `${student.name}, avec une moyenne de : ${student.moyenne}/20`
//   }
  
//   console.log(`Top 3 étudiants :
//   1: ${formatStudent(students[0])}
//   2: ${formatStudent(students[1])}
//   3: ${formatStudent(students[2])}
//   `)


window.onload = function(){
    const canvasWidth = 900;
    const canvasHeight = 600;
    const blockSize = 30; // en pixels
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext('2d');
    const widthInBlocks = canvasWidth/blockSize; 
    const heightInBlocks = canvasHeight/blockSize;
    const centreX = canvasWidth / 2;
    const centreY = canvasHeight / 2;
    let delay; // en millisecondes
    let snakee;
    let applee;
    let score;
    let timeout;
  
    init();
  
    function init(){
      canvas.width = canvasWidth;
      canvas.height = canvasHeight;
      canvas.style.border = "30px solid gray";
      canvas.style.margin = "50px auto";
      canvas.style.display = "block";
      canvas.style.backgroundColor = "#ddd";
      document.body.appendChild(canvas);
      launch();
    }
  
    function launch(){
      snakee = new Snake([[6,4],[5,4],[4,4],[3,4],[2,4]], "right");
      applee = new Apple([10, 10]);
      score = 0;
      clearTimeout(timeout);
      delay = 100;
      refreshCanvas();
    }
  
    function refreshCanvas(){
      snakee.advance();
      if(snakee.checkCollision()){
        gameOver();
      } else {
        if(snakee.isEatingApple(applee)) {
          score++;
          snakee.ateApple = true;
          do {
            applee.setNewPosition();
          } while(applee.isOnSnake(snakee))
            if(score % 5 == 0){
              speedUp();
            }
        }
        ctx.clearRect(0,0,canvasWidth, canvasHeight);
        drawScore();
        snakee.draw();
        applee.draw();
        timeout = setTimeout(refreshCanvas, delay);
      }
    }
  
    function gameOver(){
      ctx.save();
      ctx.font = "bold 70px sans-serif";
      ctx.fillStyle = "black";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.strokeStyle = "white";
      ctx.lineWidth = "5";
      ctx.strokeText("Game Over", centreX, centreY - 180);
      ctx.fillText("Game Over", centreX, centreY - 180);
      ctx.font = "bold 30px sans-serif";
      ctx.strokeText("Appuyer sur la touche espace pour rejouer", centreX, centreY - 120);
      ctx.fillText("Appuyer sur la touche espace pour rejouer", centreX, centreY - 120);
      ctx.restore();
    }
  
    function drawScore(){
      ctx.save();
      ctx.font = "bold 200px sans-serif";
      ctx.fillStyle = "gray";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText(score.toString(), centreX, centreY);
      ctx.restore();
    }
  
    function speedUp(){
      delay /= 1.1;
    }
  
    //Fonction de dessin d'un block du serpent
    function drawBlock(ctx, position){
      const x = position[0] * blockSize;
      const y = position[1] * blockSize;
      ctx.fillRect(x, y, blockSize, blockSize);
    }
  
    //Fonction constructrice du serpent
    function Snake(body, direction){
      this.body = body;
      this.direction = direction;
      this.ateApple = false;
      this.draw = function(){
        ctx.save();
        ctx.fillStyle = "#ff0000";
        for(let i = 0; i < this.body.length;i++){
          drawBlock(ctx, this.body[i]);
        }
        ctx.restore();
      };
      this.advance = function(){
        const nextPosition = this.body[0].slice();
        switch(this.direction){
          case "left":
            nextPosition[0] -= 1;
            break;
          case "right":
            nextPosition[0] += 1;
            break;
          case "down":
            nextPosition[1] += 1;
            break;
          case "up":
            nextPosition[1] -= 1;
            break;
          default:
            throw("Invalid direction");
        }
        this.body.unshift(nextPosition);
        if(!this.ateApple)
          this.body.pop();
        else
          this.ateApple = false;
      };
      
      this.setDirection = function(newDirection){
        let allowedDirections;
        switch(this.direction){
          case "left":
          case "right":
            allowedDirections = ["up", "down"];
            break;
          case "down":
          case "up":
            allowedDirections = ["left", "right"];
            break;
          default:
            throw("Invalid direction");
        }
        if(allowedDirections.indexOf(newDirection) > -1){
          this.direction = newDirection;
        }
      };
      this.checkCollision = function(){
        let wallCollision = false;
        let snakeCollision = false;
        const head = this.body[0];
        const rest = this.body.slice(1);
        const snakeX = head[0];
        const snakeY = head[1];
        const minX = 0;
        const minY = 0;
        const maxX = widthInBlocks-1;
        const maxY = heightInBlocks-1;
        const isNotBetweenHorizontalWalls = snakeX < minX || snakeX > maxX;
        const isNotBetweenVerticalWalls = snakeY < minY || snakeY > maxY;
        if(isNotBetweenHorizontalWalls || isNotBetweenVerticalWalls){
          wallCollision = true;
        }
        for(let i = 0;i < rest.length;i++){
          if(snakeX == rest[i][0] && snakeY == rest[i][1]){
            snakeCollision = true;
          }
        }
        return wallCollision || snakeCollision;
      };
      this.isEatingApple = function(appleToEat){
        const head = this.body[0];
        if(head[0] === appleToEat.position[0] && head[1] === appleToEat.position[1])
          return true;
        else
          return false;
      };
    }
  
    //Fonction constructrice de la pomme
    function Apple(position){
      this.position = position;
      this.draw = function(){
        const radius = blockSize / 2;
        const x = this.position[0] * blockSize + radius;
        const y = this.position[1] * blockSize + radius;
        ctx.save();
        ctx.fillStyle = "#33cc33";
        ctx.beginPath();
        ctx.arc(x,y, radius, 0, Math.PI*2, true);
        ctx.fill();
        ctx.restore();
      };
      this.setNewPosition = function(){
        const newX = Math.round(Math.random() * (widthInBlocks - 1));
        const newY = Math.round(Math.random() * (heightInBlocks - 1));
        this.position = [newX,newY];
      };
      this.isOnSnake = function(snakeToCheck){
        let isOnSnake = false;
        for(let i = 0;i < snakeToCheck.body.length;i++){
          if(this.position[0] === snakeToCheck.body[i][0] && this.position[1] === snakeToCheck.body[i][1]){
            isOnSnake = true;
          }
        }
        return isOnSnake;
      };
    }
  
  
    //Gestion des touches du clavier
    /*
    document.onkeydown = function handleKeyDown(e){
      const key = e.keyCode;
      let newDirection;
      switch(key){
        case 37:
          newDirection = "left";
          break;
        case 38:
          newDirection = "up";
          break;
        case 39:
          newDirection = "right";
          break;
        case 40:
          newDirection = "down";
          break;
        case 32:
          restart();
          return;
        default:
          return;
      }
      snakee.setDirection(newDirection);
    }
    */
  
  
    const map = {}; // You could also use an array
    onkeydown = onkeyup = function(e){
      e = e || event; // to deal with IE
      map[e.keyCode] = e.type == 'keydown';
      let newDirection;
      console.log(map);
      if(map[37]){
        newDirection = "left";
      } else if(map[38]){
        newDirection = "up";
      } else if(map[39]){
        newDirection = "right";
      } else if(map[40]){
        newDirection = "down";
      } else if(map[32]){
        launch();
      }
      snakee.setDirection(newDirection);
    }
  
    window.addEventListener('keydown', onkeyup);
  window.addEventListener('keyup', onkeydown);
  }