import {customFormValidationProps} from "../@types/form-types";

export const customFormValidations = ({
	images,
	brandIcon,
	isSubmitted,
	year,
	setError,
	clearErrors,
}: customFormValidationProps) => {
	const isImagesExist = Array.isArray(images) && images.length > 0;
	const isBrandIconExist = brandIcon !== undefined && brandIcon.length > 0;
	const isYearExist = year !== undefined;

	if (isSubmitted && !isImagesExist) {
		setError("images", {
			type: "required",
			message: "Imagem obrigatória",
		});
	} else {
		clearErrors("images");
	}

	if (isSubmitted && !isBrandIconExist) {
		setError("brandIcon", {
			type: "required",
			message: "Seleção de icone Obrigatória",
		});
	} else {
		clearErrors("brandIcon");
	}

	if (isSubmitted && !isYearExist) {
		setError("year", {
			type: "required",
			message: "Ano do Carro Obrigatório",
		});
	} else {
		clearErrors("year");
	}
};
