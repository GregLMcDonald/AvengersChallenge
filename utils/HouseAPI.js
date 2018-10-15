import Character from './Character';

export const fetchCharacter = async (name) => {
  const nameWithSpacesRemoved = name.replace(/\s/g, '');

  const uri = `http://www.gregmcdonald.ca/avengers/${nameWithSpacesRemoved}.json`;

  const response = await fetch(uri);
  const result = await response.json();

  console.log( name,'response.status',response.status);

  if (response.status === 200) {
    const character = result;
    character.image = `http://www.gregmcdonald.ca/avengers/${result.iamge}`;

    return character;
  }

  return null;
};
