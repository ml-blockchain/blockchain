import Person from "./Person.class";

class PersonPublicOperations extends Person{
	constructor() {
		super()
	}

	get publicKey(){
		return this.publicKey;
	}

	get articles(){
		return this.articles;
	}

	get points(){
		return this.points;
	}
}