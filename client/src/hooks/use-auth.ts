import {api} from "../api/axios";
import {
	saveTokenAndUserId,
	removeTokenAndUserId,
} from "@storage/storageAuthToken";

import {useNavigate} from "react-router-dom";

type AuthProps = {
	name: string;
	email: string;
	password: string;
};

type AuthLoginProps = Omit<AuthProps, "name">;

type AuthLoginData = {
	userId: string;
	acessToken: string;
	refreshToken: string;
	msg: string;
};

type AuthRegisterData = Pick<AuthLoginData, "msg">;

export const useAuth = () => {
	const navigate = useNavigate();

	async function authLogin({email, password}: AuthLoginProps): Promise<string> {
		const {data} = await api.post<AuthLoginData>(`/auth/login`, {
			email,
			password,
		});

		const {acessToken, refreshToken, userId, msg} = data;

		saveTokenAndUserId({acessToken, refreshToken, userId});

		return msg;
	}

	async function authRegister({
		name,
		email,
		password,
	}: AuthProps): Promise<string> {
		const {data} = await api.post<AuthRegisterData>("/auth/register", {
			name,
			email,
			password,
		});

		return data.msg;
	}

	async function authSignOut() {
		removeTokenAndUserId();

		navigate("/");
	}

	return {authLogin, authRegister, authSignOut};
};
