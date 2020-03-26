let doorImage1 = document.getElementById('door1');
let doorImage2 = document.getElementById('door2');
let doorImage3 = document.getElementById('door3');
let startButton =document.getElementById('start');

const botDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/robot.svg";
const beachDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/beach.svg";
const spaceDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/space.svg";
const closedDoorPath = "https://s3.amazonaws.com/codecademy-content/projects/chore-door/images/closed_door.svg";
let numClosedDoors = 3;
let currentlyPlaying = true;
let openDoor1, openDoor2, openDoor3;

const playDoor = (door) => {
  numClosedDoors --;
  if (numClosedDoors === 0) {
    gameOver('win');
  } else if (isBot(door)) {
    gameOver();
  } 
}

const isClicked = (door) => {
  if (door.src === closedDoorPath) {
    return false;
  } else {
    return true;
  }
}

const isBot = (door) => {
  if (door.src === botDoorPath){
    return true;
  } else {
    return false;
  }
}

const randomChoreDoorGenerator = () => {
  let choreDoor = Math.floor(Math.random()*numClosedDoors);
  if (choreDoor === 0){
    openDoor1 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else if (choreDoor === 1){
    openDoor2 = botDoorPath;
    openDoor1 = beachDoorPath;
    openDoor3 = spaceDoorPath;
  }
  else {
    openDoor3 = botDoorPath;
    openDoor2 = beachDoorPath;
    openDoor1 = spaceDoorPath;
  }
}

if (!isClicked(doorImage1) && currentlyPlaying){
doorImage1.onclick = function(){
  this.src = openDoor1;
  playDoor(doorImage1);
}}

if (!isClicked(doorImage2) && currentlyPlaying){
doorImage2.onclick = function(){
  this.src = openDoor2;
  playDoor(doorImage2);
}}

if (!isClicked(doorImage3) && currentlyPlaying){
doorImage3.onclick = function(){
  this.src = openDoor3;
  playDoor(doorImage3);
}}

startButton.onclick = function(){
  if (!currentlyPlaying) {
  startRound();
  }
}

const startRound = () => {
  doorImage1.src = closedDoorPath; 
  doorImage2.src = closedDoorPath;
  doorImage3.src = closedDoorPath;
  numClosedDoors = 3;
  startButton.innerHTML = 'Good luck!';
  currentlyPlaying = true;
  randomChoreDoorGenerator();
}

const gameOver = (status) => {
  if (status === 'win') {
    startButton.innerHTML = 'You win! Play again?';
  } else {
    startButton.innerHTML = 'Game over! Play again?';
  }
  currentlyPlaying = false;
}


startRound();
