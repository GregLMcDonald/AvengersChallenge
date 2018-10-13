


export const fetchCharacter = async ( name ) => {
	
	const PUBLIC_KEY = 'aeb64597e3a12d93af66321a4953001a';
	const encodedName = encodeURI( name );
	const uri = 'https://gateway.marvel.com:443/v1/public/characters?name=' + encodedName + '&ts=1&apikey=' + PUBLIC_KEY + '&hash=9fd865ae1ca805ff7ef96e31ee7dabcc';

  	const response = await fetch( uri );

  	const result = await response.json();
  	
  	if ( response.status === 200 ){


  		const character = {};

  		if ( result.data.count > 0 ){

  			character.name = result.data.results[0].name;
  			character.bio = result.data.results[0].description;

  		}


  		
  		return character;

  	} else {

  		return null;

  	}

};

