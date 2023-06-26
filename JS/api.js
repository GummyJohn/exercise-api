export async function getData(text){
  const url = `https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=${text}`;

  const options = {
    headers: {
      'X-RapidAPI-Key': '50d5c6c356mshb8a1720a44e3e1cp13b881jsnb7e170ed2fb6',
      'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
    }
  };
  
  
  const response = await fetch(url, options);
  const result = await response.json();
  return result;
}



