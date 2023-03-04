import {
	getTokensOrUserId,
	removeTokenAndUserId,
} from "@storage/storageAuthToken";

import {Navigate} from "react-router-dom";

import {ComponentType, useEffect, useState} from "react";

type PrivateRouteProps = {
	redirectTo: string;
	component: ComponentType<any>;
};

export const PrivateRoute = ({
	redirectTo,
	component: Component,
}: PrivateRouteProps) => {
	const tokenFn = () => Boolean(getTokensOrUserId("acessToken"));

	const [isAuthenticated, setIsAuthenticated] = useState(tokenFn());

	useEffect(() => {
		const handleStorageChange = () => {
			const token = tokenFn();
			setIsAuthenticated(token);
			if (!token) removeTokenAndUserId();
		};

		window.addEventListener("storage", handleStorageChange);

		return () => {
			window.removeEventListener("storage", handleStorageChange);
		};
	}, []);

	return isAuthenticated ? <Component /> : <Navigate to={redirectTo} replace />;
};
