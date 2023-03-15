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

	async function authLogin({email, password}: AuthLoginProps) {
		try {
			const {
				data: {acessToken, refreshToken, userId, msg},
			} = await api.post<AuthLoginData>(`/auth/login`, {
				email,
				password,
			});

			saveTokenAndUserId({acessToken, refreshToken, userId});

			return msg;
		} catch (error: any) {
			throw error;
		}
	}

	async function authRegister({name, email, password}: AuthProps) {
		try {
			const {
				data: {msg},
			} = await api.post<AuthRegisterData>("/auth/register", {
				name,
				email,
				password,
			});

			return msg;
		} catch (error: any) {
			throw error;
		}
	}

	async function authSignOut() {
		removeTokenAndUserId();

		navigate("/");
	}

	return {authLogin, authRegister, authSignOut};
};
