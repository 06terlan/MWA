const {of} = rxjs;
const {filter} = rxjs.operators;

function isWeekend() {
	const weekend = false;
	const todayDate = new Date();
	const day = todayDate.getDay();

	of(day).pipe(
		filter(x=>x%5==0||x%6==0)
	).subscribe(
		(x)=>weekend=true
	)

	return weekend;
}

console.log(isWeekend());