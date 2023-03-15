import {CustomFormValidationNewCar} from "@typings/form-types";

const validationsNewCar = ({
	images,
	brandIcon,
	isSubmitted,
	year,
	setError,
	clearErrors,
}: CustomFormValidationNewCar) => {
	const isYearExist = year !== undefined;
	const isImagesExist = Array.isArray(images) && images.length > 0;
	const isBrandIconExist = brandIcon !== undefined && brandIcon.length > 0;

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
// const validationsProfile = ({
// 	profileOrigin,
// 	data,
// 	setError,
// 	clearErrors,
// 	dirtyFields,
// }: CustomFormValidationProfile) => {
// 	function clearError(key: any) {
// 		setTimeout(() => clearErrors(key), 4000);
// 	}
// 	const notEqualOrEmpty = Object.entries(data).reduce((acc, [key, value]) => {
// 		if (dirtyFields[key] && !value) {
// 			setError(key, {
// 				type: "required",
// 				message: `O campo ${key} não pode estar vazio.`,
// 			});

// 			clearError(key);
// 		}

// 		if (dirtyFields[key] && value === profileOrigin[key]) {
// 			setError(key, {
// 				type: "pattern",
// 				message: `O campo ${key} não pode ser igual ao original`,
// 			});

// 			clearError(key);
// 		}

// 		if (value && value !== profileOrigin[key]) {
// 			acc[key] = value;
// 		}

// 		return acc;
// 	}, {} as any);

// 	return notEqualOrEmpty;
// };

export {validationsNewCar};
