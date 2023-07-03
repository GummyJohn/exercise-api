export async function getData(text){
  const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${text}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': 'use your own API-KEY',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}

export async function getTypes(text){
  const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?type=${text}`;

const options = {
	headers: {
		'X-RapidAPI-Key': 'use your own API-KEY',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

const response = await fetch(url, options);
const result = await response.json();

return result;
}



