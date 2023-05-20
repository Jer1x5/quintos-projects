async function start() {
	// your code goes here!
	let num = Math.ceil(Math.random() * 100);
	let guess;

	while (guess != num) {
		guess = await prompt('Guess the number: ');
		if (guess < num) {
			await alert('Too small');
		} else if (guess > num) {
			await alert('Too big');
		} else if (guess == num) {
			await alert('Correct!');
		}
	}

	exit();
}
