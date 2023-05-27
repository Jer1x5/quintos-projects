const target = `
 .d88b. 
.8P  Y8.
88    88
88    88
 8b  d8 
 'Y88P' `;

const imposter = `
 xx    xx
  xx  xx
	  xx
		xx
	xx  xx
 xx    xx
		`;

// TODO: find the range of row and column values the target can be placed at
function makeTargets() {
	let row1 = round(random(1, 23));
	let col1 = round(random(1, 71));
	button(target, row1, col1);
	for (i = 0; i <= 4; i++) {
		let row2 = round(random(1, 23));
		let col2 = round(random(1, 71));
		button(imposter, row2, col2);
	}
}
//23 71
function start() {
	makeTargets();
}
