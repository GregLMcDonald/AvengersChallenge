
import Character from './Character';
import CharacterData from '../CharacterData';

const PUBLIC_KEY = 'aeb64597e3a12d93af66321a4953001a';
const HASH = '9fd865ae1ca805ff7ef96e31ee7dabcc';
const TS = '1';


const BIO_LORUM_IPSUM = '';
const POWERS_LORUM_IPSUM = '';

export const fetchCharacter = async ( name ) => {
	
	const encodedName = encodeURI( name );
	const uri = 'https://gateway.marvel.com:443/v1/public/characters?name=' + encodedName + '&ts=' + TS + '&apikey=' + PUBLIC_KEY + '&hash=' + HASH;

  	const response = await fetch( uri );
  	const result = await response.json();
  	
  	if ( response.status === 200 ){

  		if ( result.data.count > 0 ){


        const marvelCharacterData = result.data.results[0];

        const nameKey = name.replace(/\s/g, '');
        const localCharacterData = CharacterData[ nameKey ];

        const character = new Character( name, localCharacterData.identity )

  			character.bio = result.data.results[0].description;

  		}


  		
  		return character;

  	} else {

  		return null;

  	}

};

