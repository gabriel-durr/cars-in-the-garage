//TODO  Criar uma class para erro personalizado, e interceptar esses erros diferenciando erro tratado na api para outros erros genéricos, exibindo um TOAST para o usuário

import axios, {AxiosInstance} from "axios";

// const url = "https://server-rydc.onrender.com";
const url = "http://localhost:3333";

const api: AxiosInstance = axios.create({
	baseURL: url,
	headers: {
		"Content-Type": "application/json",
	},
});

export {api};
