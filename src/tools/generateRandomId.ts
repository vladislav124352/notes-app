export function generateRandomId() {
	return Math.ceil((Date.now() * 2) / (Math.random() * 1000000000));
}
