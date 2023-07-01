import { 
  getData,
  getTypes,
} from "./api.js";

import { 
  header,
  singleBoxes,
  tabs
} from "./statics.js";

const body = document.querySelector('#body')

body.append(header())
body.append(tabs())

// MUSCLE TAB
const input = document.querySelector('.search-bar');
const displayContainer = document.querySelector('.display-container');
const button = document.querySelector('.button')

const tab1 = document.querySelector('.muscle-tab')
const muscleContent = document.querySelector('.content-box')
const tab2 = document.querySelector('.types-tab');
const typeContent = document.querySelector('.content-box-two');

window.addEventListener('load', () => {
  tab1.click();
})

tab1.addEventListener('click', () => {
  muscleContent.classList.remove('hide');
  typeContent.classList.add('hide');
})

tab2.addEventListener('click', () => {
  typeContent.classList.remove('hide');
  muscleContent.classList.add('hide');
})

input.addEventListener('keypress', async () => {
  if(event.keyCode === 13){
    let getWorkouts = await getData(input.value);
    
    for(let i = 0; i < getWorkouts.length; i++){
      displayContainer.append(singleBoxes(getWorkouts[i]));
    }
    
    input.value = '';
  }
  
  const contents = document.querySelectorAll('.box-container');
  button.addEventListener('click', () => {
    contents.forEach((each) => {
      each.classList.add('hide');
    })
  })
})


// TYPES TABS
const buttonTwo = document.querySelector('.button-two');
const typeInput = document.querySelector('.type-search-bar');
const typeDisplayContainer = document.querySelector('.type-display-container');


typeInput.addEventListener('keypress', async () => {
  if(event.keyCode === 13){
    let getTypesData = await getTypes(typeInput.value);
    
    for(let i = 0; i < getTypesData.length; i++){
      typeDisplayContainer.append(singleBoxes(getTypesData[i]));
    }
    
    typeInput.value = '';
  }

  buttonTwo.addEventListener('click', () => {
      
  })
})