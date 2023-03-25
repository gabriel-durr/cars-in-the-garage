import { api } from "../api/axios";
import {
	saveTokenAndUserId,
	removeTokenAndUserId,
} from "@storage/storageAuthToken";

import { useNavigate } from "react-router-dom";
import { useQueryClient } from "@tanstack/react-query";

import { useState } from "react";

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
	const [isLoading, setIsloading] = useState(false);

	const navigate = useNavigate();
	const queryClient = useQueryClient();

	async function authLogin({ email, password }: AuthLoginProps) {
		try {
			setIsloading(true);

			const {
				data: { acessToken, refreshToken, userId, msg },
			} = await api.post<AuthLoginData>(`/auth/login`, {
				email,
				password,
			});

			saveTokenAndUserId({ acessToken, refreshToken, userId });

			return msg;
		} catch (error: any) {
			throw error;
		} finally {
			setIsloading(false);
		}
	}

	async function authRegister({ name, email, password }: AuthProps) {
		try {
			setIsloading(true);

			const {
				data: { msg },
			} = await api.post<AuthRegisterData>("/auth/register", {
				name,
				email,
				password,
			});

			return msg;
		} catch (error: any) {
			throw error;
		} finally {
			setIsloading(false);
		}
	}

	async function authSignOut() {
		removeTokenAndUserId();
		queryClient.removeQueries(["user"]);

		navigate("/");
	}

	return { authLogin, authRegister, authSignOut, isLoading };
};
