//

export default class Character {

	constructor( name, identity ){
		this.name = name;
		this.identity = identity;
		this.age = 48;
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