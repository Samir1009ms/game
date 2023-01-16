const arr = [
  {
    image: "lizard.png",
    name: "Lizard",
  },
  {
    image: "paper.png",
    name: "Paper",
  },
  {
    image: "rock.png",
    name: "Rock",
  },
  {
    image: "scissor.png",
    name: "Scissor",
  },
  {
    image: "spock.png",
    name: "Spock",
  },
];

const rule = {
  Lizard: ["Spock", "Paper"],

  Paper: ["Rock", "Spock"],

  Rock: ["Lizard", "Scissor"],

  Scissor: ["Paper", "Lizard"],

  Spock: ["Scissor", "Rock"],
};

const player1Options = document.querySelectorAll(
  "#player1 .available-options .option"
);

const botOptions = document.querySelectorAll(
  "#player2 .available-options .option"
);

const playerShowArea = document.querySelector(
  "#player1 .selected-option .option"
);

const botShowArea = document.querySelector("#player2 .selected-option .option");

const player1Score = document.querySelector("#player1-score");
const player2Score = document.querySelector("#player2-score");

const roundMessage = document.querySelector("#round-message");
//*-------------------------------------------------------------
const a = document.createElement("img");
const b = document.createElement("img");

const qalib=document.querySelector(".qalib")
const gameover=document.querySelector(".game-over")
const playeralert= document.querySelector(".playeralert")
const botalert=document.querySelector(".botalert")
//*-------------------------------------------------------------
player1Options.forEach((e) => {
  e.addEventListener("click", () => {
    play(e);
  });
});

function reset() {
  botShowArea.innerHTML = "";
  playerShowArea.innerHTML = "";
  roundMessage.innerHTML = "Choose your option";
  player1Score.innerHTML = 0;
  player2Score.innerHTML = 0;

  //* -----------------------------------------------
  sessionStorage.setItem("player1Score", Number(player1Score.textContent) * 0);
  sessionStorage.setItem("player2Score", Number(player1Score.textContent) * 0);
  sessionStorage.setItem("immg2", "");
  sessionStorage.setItem("immg", "");
  sessionStorage.setItem("msj", roundMessage.textContent);

  //* -----------------------------------------------
  player1Options.forEach((e) => {
    console.log(e);
    e.classList.remove("active");
  });
  botOptions.forEach((e) => {
    console.log(e);
    e.classList.remove("active");
  });
}

document.querySelector(".reset").addEventListener("click", reset);

function play(e) {
  const player1 = e.getAttribute("data-index");

  const length = arr.length;

  const player2 = Math.floor(Math.random() * length);

  showPlayerOption(player1, playerShowArea);
  highlightSelectedOption(player1, player1Options);

  showPlayerOption2(player2, botShowArea);
  highlightSelectedOption(player2, botOptions);

  calculateScore(player1, player2);
}

const imageFolderPath = "assets";
const iii = sessionStorage.getItem("immg");
const iii2 = sessionStorage.getItem("immg2");

//! Generate an image element (generateImgElement with index)
function generateImgElement(index) {
  const { image, name } = arr[index];
  const imgElement = document.createElement("img");
  imgElement.src = `${imageFolderPath}/${image}`;
  imgElement.alt = name;
  imgElement.title = name;
  console.log(imgElement.src);

  return imgElement;
}
//! Show selected option (showPlayerOption with index and showArea)

function showPlayerOption(index, showArea) {
  const imgElement = generateImgElement(index);
  showArea.innerHTML = "";
  showArea.append(imgElement);

  //* -----------------------------------------------
  sessionStorage.setItem("immg", imgElement.src);
  // sessionStorage.setItem("immg",imgElement.src)
  //* -----------------------------------------------
}
function showPlayerOption2(index, showArea) {
  const imgElement = generateImgElement(index);
  showArea.innerHTML = "";
  showArea.append(imgElement);

  //* -----------------------------------------------
  sessionStorage.setItem("immg2", imgElement.src);
  // sessionStorage.setItem("immg",imgElement.src)
  //* -----------------------------------------------
}

//! highlightSelectedOption function with index and options array
function highlightSelectedOption(index, options) {
  options.forEach((e) => {
    e.classList.remove("active");
  });
  options[index].classList.add("active");
}

//! Show the message (showMessage with msg)
function showMessage(msg) {
  roundMessage.innerHTML = "";
  roundMessage.innerHTML = msg;
}
const sss = sessionStorage.getItem("player1Score");
const ss = sessionStorage.getItem("player2Score");
const msj = sessionStorage.getItem("msj");
//! Claculate function for player 1, player 2 scores (calculateScore with player1, player2)
function calculateScore(player1, player2) {
  const player1Choice = arr[player1].name;
  const player2Choice = arr[player2].name;

  const player1Strength = rule[player1Choice];
  if (player1Choice === player2Choice) {
    showMessage("Draw!");
  } else if (player1Strength.includes(player2Choice)) {
    showMessage("Player is winner !");
//*----------------------------------------------
    playeralert.classList.add("transform")
    setTimeout(() => {
    playeralert.classList.remove("transform")
      
    }, 1500);
//*----------------------------------------------------------
   

    sessionStorage.setItem("player1Score",Number(player1Score.textContent) + 1
    );
    if(player1Score.textContent==15-1){
 //* -----------------ANIMASIYA-START--------------------------
 canvas = document.getElementById("canvas");
 ctx = canvas.getContext("2d");
 canvas.width = window.innerWidth;
 canvas.height = window.innerHeight;
 cx = ctx.canvas.width / 2;
 cy = ctx.canvas.height / 2;

 let confetti = [];
 const confettiCount = 300;
 const gravity = 0.5;
 const terminalVelocity = 5;
 const drag = 0.075;
 const colors = [
   { front: "red", back: "darkred" },
   { front: "green", back: "darkgreen" },
   { front: "blue", back: "darkblue" },
   { front: "yellow", back: "darkyellow" },
   { front: "orange", back: "darkorange" },
   { front: "pink", back: "darkpink" },
   { front: "purple", back: "darkpurple" },
   { front: "turquoise", back: "darkturquoise" },
 ];

 //-----------Functions--------------
 resizeCanvas = () => {
   canvas.width = window.innerWidth;
   canvas.height = window.innerHeight;
   cx = ctx.canvas.width / 2;
   cy = ctx.canvas.height / 2;
 };

 randomRange = (min, max) => Math.random() * (max - min) + min;

 initConfetti = () => {
   for (let i = 0; i < confettiCount; i++) {
     confetti.push({
       color: colors[Math.floor(randomRange(0, colors.length))],
       dimensions: {
         x: randomRange(10, 20),
         y: randomRange(10, 30),
       },

       position: {
         x: randomRange(0, canvas.width),
         y: canvas.height - 1,
       },

       rotation: randomRange(0, 2 * Math.PI),
       scale: {
         x: 1,
         y: 1,
       },

       velocity: {
         x: randomRange(-15, 15),
         y: randomRange(0, -40),
       },
     });
   }
 };

 //---------Render-----------
 render = () => {
   ctx.clearRect(0, 0, canvas.width, canvas.height);

   confetti.forEach((confetto, index) => {
     let width = confetto.dimensions.x * confetto.scale.x;
     let height = confetto.dimensions.y * confetto.scale.y;

     // Move canvas to position and rotate
     ctx.translate(confetto.position.x, confetto.position.y);
     ctx.rotate(confetto.rotation);

     // Apply forces to velocity
     confetto.velocity.x -= confetto.velocity.x * drag;
     confetto.velocity.y = Math.min(
       confetto.velocity.y + gravity,
       terminalVelocity
     );
     confetto.velocity.x +=
       Math.random() > 0.5 ? Math.random() : -Math.random();

     // Set position
     confetto.position.x += confetto.velocity.x;
     confetto.position.y += confetto.velocity.y;

     // Delete confetti when out of frame
     if (confetto.position.y >= canvas.height) confetti.splice(index, 1);

     // Loop confetto x position
     if (confetto.position.x > canvas.width) confetto.position.x = 0;
     if (confetto.position.x < 0) confetto.position.x = canvas.width;

     // Spin confetto by scaling y
     confetto.scale.y = Math.cos(confetto.position.y * 0.1);
     ctx.fillStyle =
       confetto.scale.y > 0 ? confetto.color.front : confetto.color.back;

     // Draw confetto
     ctx.fillRect(-width / 2, -height / 2, width, height);

     // Reset transform matrix
     ctx.setTransform(1, 0, 0, 1, 0, 0);
   });

   // Fire off another round of confetti
   // if (confetti.length <= 1) initConfetti();

   window.requestAnimationFrame(render);
 };

 //---------Execution--------
 initConfetti();
 render();

 //----------Resize----------
 // window.addEventListener("resize", function () {
 //   resizeCanvas();
 // });

 //------------Click------------
 // window.addEventListener("click", function () {
 //   initConfetti();
 // });

 // clearInterval();




      gameover.classList.remove("hidden")
      qalib.textContent="Player Is Winner"
      qalib.style.color="red"
      setTimeout(() => {
        gameover.classList.add("hidden")
        reset()
      }, 4000);


      console.log("S");
    }
   
    //* -----------------------------------------------

    addScore(player1Score);
  } else {
    showMessage("Bot is winner !");
    //* -----------------------------------------------
    sessionStorage.setItem("player2Score", Number(player2Score.textContent) + 1 //* +1 ona gore yazdim ki udanda 1 ci sifir gotururdu
    );
    if( player2Score.textContent==15-1){
      console.log("Y");
      gameover.classList.remove("hidden")
      qalib.textContent="Bot Is Winner"
      console.log(qalib.textContent);
      qalib.style.color="red"
      setTimeout(() => {
        gameover.classList.add("hidden")
        reset()
      }, 4000);
    }

    botalert.classList.add("transform")

    setTimeout(() => {
    botalert.classList.remove("transform")
    }, 1500);
    
   
    //* -----------------------------------------------
    addScore(player2Score);
  }
  //* -----------------------------------------------
  sessionStorage.setItem("msj", roundMessage.textContent);
  //* -----------------------------------------------
}

//* -----------------------------------------------
// const ss = sessionStorage.getItem("ss");

if (sss.textContent !== "") {
  b.src = iii2;
  a.src = iii;
  botShowArea.append(b);
  playerShowArea.append(a);
  roundMessage.textContent = msj;
  player1Score.textContent = Number(sss);
  player2Score.textContent = Number(ss);
}
//* -----------------------------------------------

//! Change the score (addScore with player)
function addScore(player) {
  const { textContent } = player;
  player.textContent = Number(textContent) + 1;
  // sessionStorage.setItem("ss",player.textContent)
  // console.log(player.textContent);

  // sessionStorage.setItem("ss", player.innerHTML);
}

// sessionStorage.setItem(player2Score)

// sessionStorage.setItem("salam" , "Salamm")
// sessionStorage.setItem(addScore(player))

//TODO:: *** confity, alert message, storage score, if the difference is 15 and biger, then reset game and new game start, if I want to add a third player option add it ***
