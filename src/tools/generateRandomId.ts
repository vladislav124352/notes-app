export function generateRandomId() {
	return (Date.now() * 2) / (Math.random() * 100);
}
