function PCreate(name, text){
  const p = document.createElement('p');
  p.className = name;
  p.innerText = text;

  return p;
}

export function header(){
  const header = document.createElement('div');
  header.className = 'header';
  
  const dumbell = document.createElement('div')
  dumbell.innerHTML = `<i class="fa-solid fa-dumbbell"></i>`;
  
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
  
  const exampleContainer = document.createElement('div');
  exampleContainer.className = 'example-container';
  
  let exArr = ['ex.','abdominals', 'biceps', 'calves', 'chest', 'forearms', 'glutes', 'hamstrings', 'lats'];
  
  for(let i = 0; i < exArr.length; i++){
    exampleContainer.append(PCreate('exercise', exArr[i]));
  }
  
  searchBarContainer.append(searchBar);
  searchContainer.append(searchBarContainer);
  searchContainer.append(exampleContainer);

  return searchContainer;
}



export function muscleDisplay(){
  const muscleDisplay = document.createElement('div');
  muscleDisplay.className = 'display-container';

  return muscleDisplay;
}

