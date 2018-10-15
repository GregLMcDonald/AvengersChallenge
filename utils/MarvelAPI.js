/*

  This function is not used in the current implementation.  I left it
  here for future reference.
  
  If one or more characters with a name exactly matching that given as an argument
  to fetchCharacter() exists in the Marvel DB, the character information is
  returned in the array marvelModel.data.results.

  I did grab the bio for the superheroes from this DB, but found I didn't
  have much use for the rest of the Marvel data.

  
  
*/

/*
   Authentication:

    Applications must pass the developer's Marvel API public key, a timestamp
    (which can be any string) and a hash in the form of an md5 digest of the
    string formed by ts + private key + public key.

*/

const PUBLIC_KEY = 'aeb64597e3a12d93af66321a4953001a';
const TS = '1';
const HASH = 'xxxxxxxxxxxxxxxxxxxxxxxxx'; //This is not the proper hash BTW!



export const fetchCharacter = async ( name ) => {
	
	const encodedName = encodeURI( name );
	const uri = 'https://gateway.marvel.com:443/v1/public/characters?name=' + encodedName + '&ts=' + TS + '&apikey=' + PUBLIC_KEY + '&hash=' + HASH;

  	const response = await fetch( uri );
  	const marvelModel = await response.json();
  	
  	if ( response.status === 200 ){

  		if ( marvelModel.data.count > 0 ){

        const marvelCharacterData = marvelModel.data.results[0];

        // The relevant Marvel character data would be extracted 
        // here and returned.

  		}


  	} else {

  		return null;

  	}

};

