class University{
	constructor(public name : string, public dept: string){

	}

	graduation(year:number){
		console.log(`Graduation ${this.dept} ${year} students`);
	}
}

const mum = new University("MUM", "Computer Science");
mum.graduation(2019);