/*
  
  For testing purposes, I put data for each superhero in a JSON file in a subdir
  of my website.  The schema for the data is:
  { 
    "name": string,
    "identity": string, 
    "age": number,
    "image": string,
    "bio": string, 
    "powers": string, 
  }

  The same directory also contains an image for each superhero 

*/

const BASE_URL = 'http://www.gregmcdonald.ca/avengers/';

export const fetchCharacter = async (name) => {
  const nameWithSpacesRemoved = name.replace(/\s/g, '');

  const uri = BASE_URL + nameWithSpacesRemoved + '.json';

  const response = await fetch(uri);
  const result = await response.json();

  if (response.status === 200) {
    const character = result;

    character.image = BASE_URL + result.image ;

    return character;
  }

  return null;
};
