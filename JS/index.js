import { getData } from "./api.js";
import { 
  header,
  search,
  muscleDisplay
} from "./statics.js";

const body = document.querySelector('#body')

body.append(header())
body.append(search())
body.append(muscleDisplay())

const input = document.querySelector('.search-bar');
console.log(input)

async function init(){
  let list;

  input.addEventListener('keypress' , () => {
    if(event.keyCode === 13){
      console.log(input.value)
    }
  })
  

}

init()


function singleBoxes({name, instructions, muscle, difficulty}){
  const box = document.createElement('div');
  box.innerHTML = `
    <div class='exercise-content'>
      <h2 class= 'exercise-title'>${name}</h2>
      
      <p class='muscle-target'> Muscle: ${muscle}</p>
      <p class='difficulty'> Difficulty: ${difficulty}</p>
      <p class='instructions'> Captial: ${instructions}</p>         
    </div>
  `
}