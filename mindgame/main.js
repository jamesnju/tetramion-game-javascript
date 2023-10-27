const prompt = require("prompt-sync")();

const name =prompt("What my name  ")
const answer = "james";

if(name === answer){
    console.log('right ');
}
else{
    console.log('sorry');
}