import Character from './Character';

export const fetchCharacter = async ( name ) => {

	const nameWithSpacesRemoved = name.replace(/\s/g, '');

	const uri = 'http://www.gregmcdonald.ca/avengers/' + nameWithSpacesRemoved + '.json' ;

  	const response = await fetch( uri );
  	const result = await response.json();

  	if ( response.status === 200 ){

  		const character = new Character( name, result.identity );
  		character.image = 'http://www.gregmcdonald.ca/avengers/' + result.iamge;
  		character.bio = result.bio || BIO_LORUM_IPSUM;
  		character.powers = result.powers || POWERS_LORUM_IPSUM;
  		character.age = result.age;

  		return character;

  	} else {

  		return null;

  	}

}