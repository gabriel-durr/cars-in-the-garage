export function formatBitcoin(value = "") {
	if (value.length > 6) {
		return value.slice(0, 6).replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1.") + "+";
	}
	return value.slice(0, 6).replace(/(\d{1,3})(?=(\d{3})+$)/g, "$1.");
}
