export function getRandom(length: number, notChars: string): string {
	let result: string = '';

	const characters: string = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';	
	if (notChars) characters.replace(notChars, '');
	const charactersLength: number = characters.length;

	let counter: number = 0;
	while (counter < length) {
		result += characters.charAt(Math.floor(Math.random() * charactersLength));
		counter += 1;
	}
	return result;
}