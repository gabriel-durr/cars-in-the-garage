const localStorage = window.localStorage;
const markName = "@my-cars";

type SaveTokenTypesProps = {
	acessToken: string;
	refreshToken: string;
	userId?: string;
};

type getTokenPreferenceTypes = "acessToken" | "refreshToken" | "userId" | "all";

const saveTokenAndUserId = ({
	acessToken,
	refreshToken,
	userId,
}: SaveTokenTypesProps) => {
	localStorage.setItem(`${markName}_acessToken`, acessToken);
	localStorage.setItem(`${markName}_refreshToken`, refreshToken);

	if (userId) localStorage.setItem(`${markName}_userId`, userId);
};

const getTokensOrUserId = (preference: getTokenPreferenceTypes) => {
	const dataLocalStorage = {
		acessToken: localStorage.getItem(`${markName}_acessToken`),
		refreshToken: localStorage.getItem(`${markName}_refreshToken`),
		userId: localStorage.getItem(`${markName}_userId`),
	};

	const preferenceSelected =
		preference === "all" ? dataLocalStorage : dataLocalStorage[preference];

	return preferenceSelected;
};

const removeTokenAndUserId = () => {
	localStorage.removeItem(`${markName}_acessToken`);
	localStorage.removeItem(`${markName}_refreshToken`);
	localStorage.removeItem(`${markName}_userId`);
};

export {saveTokenAndUserId, getTokensOrUserId, removeTokenAndUserId};
