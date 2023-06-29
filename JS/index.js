import { getData } from "./api.js";
import { 
  header,
  search,
  muscleDisplay,
  singleBoxes,
} from "./statics.js";

const body = document.querySelector('#body')

body.append(header())
body.append(search())
body.append(muscleDisplay())
// body.append(typesSearch())
// body.append(typesDisplay())


const input = document.querySelector('.search-bar');
const displayContainer = document.querySelector('.display-container');
const button = document.querySelector('.button')

// const typeInput = document.querySelector('.type-search-bar');
// const typeDisplayContainer = document.querySelector('.type-display-container');

input.addEventListener('keypress', async () => {
  if(event.keyCode === 13){
    console.log(input.value)
    let getWorkouts = await getData(input.value);
  
    for(let i = 0; i < getWorkouts.length; i++){
      console.log(i)
      displayContainer.append(singleBoxes(getWorkouts[i]));
    }

  }
})

button.addEventListener('click', () => {
  console.log('refreshed')
})
