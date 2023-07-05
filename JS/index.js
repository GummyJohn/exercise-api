import { 
  getData,
  getTypes,
} from "./api.js";

import { 
  header,
  singleBoxes,
  tabs,
} from "./statics.js";

function spaceReplace(string){
  if(string.includes(' ')){
    return string.replace(' ', '_');
  }else{
    return string;
  }
}

const body = document.querySelector('#body')
const innerBody = document.createElement('div');
innerBody.className = 'inner-body';;

innerBody.append(header())
innerBody.append(tabs())

body.append(innerBody);

// MUSCLE TAB
const input = document.querySelector('.search-bar');
const displayContainer = document.querySelector('.display-container');
const typesDispayContainer = document.querySelector('.type-display-container')

const button = document.querySelector('.button');
const buttonTwo = document.querySelector('.button-two');

const tab1 = document.querySelector('.muscle-tab')
const tab2 = document.querySelector('.types-tab');

const muscleContent = document.querySelector('.content-box')
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
    let getWorkouts = await getData(spaceReplace(input.value));
    
    if(getWorkouts.length === 0){
      alert('COUlDN"T FIND MUSCLE')
    }
    else{
      for(let i = 0; i < getWorkouts.length; i++){
        displayContainer.append(singleBoxes(getWorkouts[i],'muscle'));
      }
    }
    
    input.value = '';
  }
  
  const contents = document.querySelectorAll('.box-container-muscle');

  button.addEventListener('click', () => {
    for(let i = 0; i < contents.length; i++){
      contents[i].classList.add('hide');
    }
  })

})

// TYPES TABS
const typeInput = document.querySelector('.type-search-bar');

typeInput.addEventListener('keypress', async () => {
  if(event.keyCode === 13){
    let getTypesData = await getTypes(spaceReplace(input.value));
    
    for(let i = 0; i < getTypesData.length; i++){
      typesDispayContainer.append(singleBoxes(getTypesData[i],'type'));
    }
    
    typeInput.value = '';
  }

  const typeContents = document.querySelectorAll('.box-container-type');

  buttonTwo.addEventListener('click', () => {
    for(let i = 0; i < typeContents.length; i++){
      typeContents[i].classList.add('hide');
    }
  })

})
