import {
	getTokensOrUserId,
	removeTokenAndUserId,
} from "../storage/storageAuthToken";

import {ComponentType, useEffect, useState} from "react";
import {Navigate} from "react-router-dom";

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
