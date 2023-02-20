const localStorage = window.localStorage;

const saveTokenToLocalStorage = (acessToken: string, refreshToken: string) => {
	localStorage.setItem("acessToken", acessToken);
	localStorage.setItem("refreshToken", refreshToken);
};

const getTokenFromLocalStorage = () => {
	const acessToken = localStorage.getItem("acessToken");
	const refreshToken = localStorage.getItem("refreshToken");

	return {acessToken, refreshToken};
};

const removeTokenFromLocalStorage = () => {
	localStorage.removeItem("acessToken");
	localStorage.removeItem("refreshToken");
};

export {
	saveTokenToLocalStorage,
	getTokenFromLocalStorage,
	removeTokenFromLocalStorage,
};
