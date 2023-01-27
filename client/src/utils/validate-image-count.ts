export function validateImageCount(pictures: File[]) {
	const MIN_IMAGES = 1;
	const MAX_IMAGES = 3;
	if (pictures.length < MIN_IMAGES) {
		alert(`Você deve selecionar pelo menos ${MIN_IMAGES} imagens`);
		return false;
	}
	if (pictures.length > MAX_IMAGES) {
		alert(`Você deve selecionar no máximo ${MAX_IMAGES} imagens`);
		return false;
	}
	return true;
}
