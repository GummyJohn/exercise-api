function PCreate(name, text){
  const p = document.createElement('p');
  p.className = name;
  p.innerText = text;

  return p;
}

export function header(){
  const header = document.createElement('div');
  header.className = 'header';
  
  const title = document.createElement('h2');
  title.className = 'title';
  title.innerHTML = `<i class="fa-solid fa-dumbbell img"></i> Exercise Search Engine`;
  
  header.append(title);

  return header;
}

export function search(){
  const searchContainer = document.createElement('div');
  searchContainer.className = 'search-terms'
  
  const searchBar = document.createElement('input');
  searchBar.placeholder = 'Search Any Muscle to Target'
  searchBar.className = 'search-bar';
  
  const searchBarContainer = document.createElement('div');
  searchBarContainer.className = 'search-bar-container';
  searchBarContainer.innerHTML = `<i class="fa-solid fa-dumbbell search-img"></i>`;

  const button = document.createElement('button');
  button.className = 'button';
  button.innerText = 'REFRESH';
  
  const exampleContainer = document.createElement('div');
  exampleContainer.className = 'example-container';
  
  let exArr = ['ex.','abdominals', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats'];
  
  for(let i = 0; i < exArr.length; i++){
    exampleContainer.append(PCreate('exercise', exArr[i]));
  }
  
  searchBarContainer.append(searchBar);
  searchBarContainer.append(button);
  searchContainer.append(searchBarContainer);
  searchContainer.append(exampleContainer);

  return searchContainer;
}

export function singleBoxes({name, instructions, muscle, difficulty}){
  const box = document.createElement('div');
  box.innerHTML = `
    <div class='exercise-content'>
      <h2 class= 'exercise-title navy'>${name}</h2>
      
      <p class='muscle-target'> Muscle: <span class='p-color'>${muscle}</span></p>
      <p class='difficulty'> Difficulty: <span class='red'>${difficulty}</span></p>
      <p class='instructions'> Instructions: ${instructions}</p>         
    </div>
  `

  return box;
}

export function muscleDisplay(){
  const muscleDisplay = document.createElement('div');
  muscleDisplay.className = 'display-container';

  return muscleDisplay;
}




// CARDIO SECTIONS

// export function typesSearch(){
//   const typesSearchContainer = document.createElement('div');
//   typesSearchContainer.className = 'search-terms'
  
//   const typesSearchBar = document.createElement('input');
//   typesSearchBar.placeholder = 'Search Types of Training'
//   typesSearchBar.className = 'type-search-bar';
  
//   const typesSearchBarContainer = document.createElement('div');
//   typesSearchBarContainer.className = 'search-bar-container';
//   typesSearchBarContainer.innerHTML = `<i class="fa-solid fa-person-walking search-img"></i>`;
  


//   const typesExampleContainer = document.createElement('div');
//   typesExampleContainer.className = 'example-container';
  
//   let exArr = ['ex.','cardio', 'olympic_weightlifting', 'plyometrics', 'powerlifting', 'strength', 'stretching', 'strongman'];
  
//   for(let i = 0; i < exArr.length; i++){
//     typesExampleContainer.append(PCreate('exercise', exArr[i]));
//   }
  
//   typesSearchBarContainer.append(typesSearchBar);

//   typesSearchContainer.append(typesSearchBarContainer);
//   typesSearchContainer.append(typesExampleContainer);

//   return typesSearchContainer;
// }

// export function typesDisplay(){
//   const typesDisplay = document.createElement('div');
//   typesDisplay.className = 'type-display-container';

//   return typesDisplay;
// }