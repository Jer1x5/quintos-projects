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

async function gameOver() {
	await alert('You clicked an imposter target, you lost. Do you want to restart?', 12);
	makeTargets();
}

// TODO: find the range of row and column values the target can be placed at
function makeTargets() {
	erase();
	let row1 = round(random(1, 23));
	let col1 = round(random(1, 71));
	button(target, row1, col1, makeTargets);

	for (i = 0; i <= 4; i++) {
		let row2 = round(random(1, 23));
		let col2 = round(random(1, 71));
		button(imposter, row2, col2, gameOver);
	}
}
//23 71
async function start() {
	await alert('click the target button, if you click an imposter target - you lose', 12);
	makeTargets();
}
