//

export default class Character {

	constructor( data ){
		this.name = data.name;
		this.identity = data.identity;
		this.age = data.age;
		this.bio = data.bio;
		
	}

	copy(){
		const newCharacter = new Character( this.name, this.identity );
		return newCharacter;
	}

	get bio(){
		return this._bio;
	}

	set bio( value ){
		this._bio = value;
	}

	get powers(){
		return this._powers;
	}

	set powers( value ){
		this._powers = value;
	}

	get image(){
		return this._image;
	}

	set image( value ){
		this._image = value;
	}


}