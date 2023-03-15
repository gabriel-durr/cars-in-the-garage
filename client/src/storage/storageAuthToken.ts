const markName = import.meta.env.CIG_MARK_NAME;

type SaveTokenTypesProps = {
	acessToken: string;
	refreshToken: string;
	userId?: string;
};

type getTokenPreferenceTypes = "acessToken" | "refreshToken" | "userId" | "all";

const saveTokenAndUserId = ({ ...tokens }: SaveTokenTypesProps) => {
	Object.entries(tokens).forEach(([key, value]) => {
		if (value) localStorage.setItem(`${markName}_${key}`, String(value));
	});
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

export { saveTokenAndUserId, getTokensOrUserId, removeTokenAndUserId };
